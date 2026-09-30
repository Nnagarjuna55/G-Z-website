import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function escapeCSVField(field: string): string {
  if (field === null || field === undefined) return '""';
  const stringified = String(field).replace(/"/g, '""');
  return `"${stringified}"`;
}

/**
 * Best-effort CSV append. Serverless filesystems (Vercel) are read-only, so this is
 * a local-development convenience only and must never fail the request — losing the
 * lead because a backup file could not be written is the worst possible outcome.
 */
function appendToLocalCSV(row: string): boolean {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const csvFilePath = path.join(dataDir, "contact-inquiries.csv");
    if (!fs.existsSync(csvFilePath)) {
      fs.writeFileSync(
        csvFilePath,
        `"Timestamp","Name","Email","Phone","Location","Inquiry Message"\n`,
        "utf8"
      );
    }
    fs.appendFileSync(csvFilePath, row, "utf8");
    return true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  let inquiry: Record<string, string> | null = null;

  try {
    const body = await req.json();
    const { name, email, phone, location, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    inquiry = {
      timestamp,
      name: String(name).trim(),
      email: String(email).toLowerCase().trim(),
      phone: phone ? String(phone).trim() : "",
      location: location ? String(location).trim() : "",
      message: String(message).trim(),
    };

    const csvSaved = appendToLocalCSV(
      [
        escapeCSVField(timestamp),
        escapeCSVField(inquiry.name),
        escapeCSVField(inquiry.email),
        escapeCSVField(inquiry.phone),
        escapeCSVField(inquiry.location),
        escapeCSVField(inquiry.message),
      ].join(",") + "\n"
    );

    // Durable destination in production. Set GOOGLE_SHEETS_WEBHOOK_URL in the
    // hosting environment so inquiries land somewhere permanent.
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    let googleSheetSynced = false;

    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inquiry),
        });
        googleSheetSynced = res.ok;
        if (!res.ok) console.error("Google Sheets webhook returned", res.status);
      } catch (webhookErr) {
        console.error("Google Sheets webhook error:", webhookErr);
      }
    }

    // Last-resort record: with no durable store configured, the platform log is the
    // only place this lead survives, so always write it there.
    if (!googleSheetSynced) {
      console.warn("CONTACT_INQUIRY_UNSTORED", JSON.stringify(inquiry));
    }

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully", googleSheetSynced, csvSaved, inquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact inquiry:", error);
    if (inquiry) console.warn("CONTACT_INQUIRY_UNSTORED", JSON.stringify(inquiry));
    return NextResponse.json(
      { error: "Internal server error saving inquiry" },
      { status: 500 }
    );
  }
}
