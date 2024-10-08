import { NextRequest, NextResponse } from "next/server";

// This function handles GET requests
export async function GET() {
  try {
    // Fetch data from the external API
    const response = await fetch("https://api.talenox.com/api/v2/employees", {
      mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 998116e96f04a08d4a4572347e40b03da0898297",
      },
    });

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
