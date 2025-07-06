import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    return NextResponse.json({
      success: true,
      message: "Test signup endpoint working",
      receivedData: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Test signup error:", error);
    return NextResponse.json({
      success: false,
      message: "Test signup failed",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
} 