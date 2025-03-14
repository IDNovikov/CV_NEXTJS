import { sendMail } from "@/utils/emailService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, contact } = await req.json();

    if (
      !name ||
      !contact ||
      typeof name !== "string" ||
      typeof contact !== "string"
    ) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const text = `This is invite from: ${name}. Contact:${contact}`;
    await sendMail({
      from: "autoMailerForIlya@yandex.ru",
      to: "crew665@yandex.ru",
      subject: "Alarm about invite",
      text,
    });

    return NextResponse.json(
      { message: "Mail successfully sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: `${error}` },
      { status: 500 }
    );
  }
}
