import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    let body: any;

    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    // Fetch data from the external API
    const response = await fetch(
      "https://open.larksuite.com/open-apis/authen/v1/oidc/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "authorization_code",
          code: body.code,
        }),
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
