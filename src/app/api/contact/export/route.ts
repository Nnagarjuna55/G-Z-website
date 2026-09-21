import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const csvFilePath = path.join(process.cwd(), "data", "contact-inquiries.csv");

    if (!fs.existsSync(csvFilePath)) {
      // Create empty template with header if not exists yet
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const csvHeader = `"Timestamp","Name","Email","Phone","Location","Inquiry Message"\n`;
      fs.writeFileSync(csvFilePath, csvHeader, "utf8");
    }

    const fileContent = fs.readFileSync(csvFilePath, "utf8");

    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="contact-inquiries-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (error) {
    console.error("Error exporting Excel CSV:", error);
    return NextResponse.json(
      { error: "Error exporting contact inquiries Excel file" },
      { status: 500 }
    );
  }
}
