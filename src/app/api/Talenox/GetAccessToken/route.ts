import { APIPaths } from "@/app/utilities/Paths";
import { NextRequest, NextResponse } from "next/server";

// This function handles GET requests
export async function POST(NextRequest: NextRequest) {
  const body = await NextRequest.json();
  const code = body.code;

  try {
    // Fetch data from the external API
    const response = await fetch(
      `https://app.talenox.com/oauth/token?grant_type=authorization_code&code=${code}&client_id=${process.env.NEXT_PUBLIC_TALENOX_CLIENT_UID}&client_secret=${process.env.NEXT_PUBLIC_TALENOX_CLIENT_SECRET}&redirect_uri=${process.env.NEXT_PUBLIC_TALENOX_REDIRECT_URI}`,
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 998116e96f04a08d4a4572347e40b03da0898297",
        },
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch employee data" },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("Fetched data: ", data);

    // Return the fetched data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error("Internal server error: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
