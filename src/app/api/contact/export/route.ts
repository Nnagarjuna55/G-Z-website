import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CSV_HEADER = `"Timestamp","Name","Email","Phone","Location","Inquiry Message"\n`;

/**
 * Exports captured inquiries as CSV.
 *
 * This returns personal data (names, emails, phone numbers), so it requires a
 * secret. Set CONTACT_EXPORT_TOKEN and call with `?token=...` or an
 * `Authorization: Bearer ...` header. With no token configured the route stays
 * closed rather than defaulting to public.
 */
export async function GET(req: Request) {
  const expected = process.env.CONTACT_EXPORT_TOKEN;
  if (!expected) {
    return NextResponse.json(
      { error: "Export is disabled. Set CONTACT_EXPORT_TOKEN to enable it." },
      { status: 404 }
    );
  }

  const url = new URL(req.url);
  const supplied =
    url.searchParams.get("token") ||
    (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");

  if (supplied !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Serverless filesystems are read-only and hold no persisted inquiries, so a
  // missing file is an empty export, never a 500.
  let fileContent = CSV_HEADER;
  try {
    const csvFilePath = path.join(process.cwd(), "data", "contact-inquiries.csv");
    if (fs.existsSync(csvFilePath)) fileContent = fs.readFileSync(csvFilePath, "utf8");
  } catch (error) {
    console.error("Could not read inquiries file:", error);
  }

  return new NextResponse(fileContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "no-store",
      "Content-Disposition": `attachment; filename="contact-inquiries-${new Date()
        .toISOString()
        .slice(0, 10)}.csv"`,
    },
  });
}
