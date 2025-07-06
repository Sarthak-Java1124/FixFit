import { NextResponse } from "next/server";

export async function GET() {
  try {
    const envCheck = {
      hasMongoUri: !!process.env.MONGODB_URI,
      hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
      hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
      nodeEnv: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    };

    console.log("Environment check:", envCheck);

    return NextResponse.json({
      success: true,
      message: "Debug endpoint working",
      envCheck,
      serverTime: new Date().toISOString()
    });
  } catch (error) {
    console.error("Debug endpoint error:", error);
    return NextResponse.json({
      success: false,
      message: "Debug endpoint failed",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
} 