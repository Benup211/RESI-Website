/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, telegram } = await req.json();

    if (!name || !email || !email.includes("@")) {
      return NextResponse.json(
        { status: "error", message: "Name and valid email required" },
        { status: 400 }
      );
    }

    const res = await fetch(process.env.CONTACT_FORM_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, telegram }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { status: "error", message: err.message || "Network error" },
      { status: 500 }
    );
  }
}
