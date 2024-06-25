import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.length) {
      return NextResponse.json({ error: "Email is required" });
    }
    const response = await fetch(
      `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    if (response.status >= 400) {
      return NextResponse.json({
        error: `There was an error subscribing to the newsletter.`,
      });
    }

    return NextResponse.json({ message: "Successfully subscribed" });
  } catch (error) {
    return NextResponse.json({ error: error.message || error.toString() });
  }
}
