import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ConsultationRequest = {
  fullName?: string;
  age?: string;
  email?: string;
  phone?: string;
  location?: string;
  concern?: string;
  background?: string;
  previousTreatment?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConsultationRequest;

    const {
      fullName,
      age,
      email,
      phone,
      location,
      concern,
      background,
      previousTreatment,
    } = body;

    // Basic validation
    if (
      !fullName ||
      !age ||
      !email ||
      !phone ||
      !location ||
      !concern
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Check required environment variables
    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_USER,
      EMAIL_PASSWORD,
      EMAIL_TO,
    } = process.env;

    if (
      !EMAIL_HOST ||
      !EMAIL_PORT ||
      !EMAIL_USER ||
      !EMAIL_PASSWORD ||
      !EMAIL_TO
    ) {
      console.error("Email environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: Number(EMAIL_PORT) === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    // Verify SMTP connection before sending
    await transporter.verify();

    // Email sent to the clinic
    await transporter.sendMail({
      from: `"Baba Ali Homoeopathic Clinic" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: "New Consultation Request — Baba Ali Homoeopathic Clinic",

      text: `
New Consultation Request

Baba Ali Homoeopathic Clinic
----------------------------------------

Full Name:
${fullName}

Age:
${age}

Email:
${email}

Phone:
${phone}

City / Country:
${location}

Main Concern:
${concern}

Brief Background:
${background || "Not provided"}

Previous Consultation / Treatment:
${previousTreatment || "Not provided"}

----------------------------------------

This consultation request was submitted through the clinic website.
      `.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Consultation request sent successfully.",
    });
  } catch (error) {
    console.error("Consultation email error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not send your consultation request. Please try again later.",
      },
      { status: 500 }
    );
  }
}