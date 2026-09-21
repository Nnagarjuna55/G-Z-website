import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function escapeCSVField(field: string): string {
  if (field === null || field === undefined) return '""';
  const stringified = String(field).replace(/"/g, '""');
  return `"${stringified}"`;
}

export async function POST(req: Request) {
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
    const dataDir = path.join(process.cwd(), "data");

    // 1. Local Excel CSV File Backup
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const csvFilePath = path.join(dataDir, "contact-inquiries.csv");
    if (!fs.existsSync(csvFilePath)) {
      const csvHeader = `"Timestamp","Name","Email","Phone","Location","Inquiry Message"\n`;
      fs.writeFileSync(csvFilePath, csvHeader, "utf8");
    }

    const csvRow = [
      escapeCSVField(timestamp),
      escapeCSVField(name),
      escapeCSVField(email),
      escapeCSVField(phone || ""),
      escapeCSVField(location || ""),
      escapeCSVField(message),
    ].join(",") + "\n";

    fs.appendFileSync(csvFilePath, csvRow, "utf8");

    // 2. Real-Time Google Sheets Webhook Dispatch
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    let googleSheetSynced = false;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp,
            name: name.trim(),
            email: email.toLowerCase().trim(),
            phone: phone ? phone.trim() : "",
            location: location ? location.trim() : "",
            message: message.trim(),
          }),
        });
        googleSheetSynced = true;
      } catch (webhookErr) {
        console.error("Google Sheets webhook error:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully",
        googleSheetSynced,
        inquiry: {
          timestamp,
          name: name.trim(),
          email: email.toLowerCase().trim(),
          phone: phone ? phone.trim() : "",
          location: location ? location.trim() : "",
          message: message.trim(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error saving inquiry" },
      { status: 500 }
    );
  }
}
