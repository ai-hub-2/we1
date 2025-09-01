import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    console.log(text, 'text');
    
    // Temporarily disabled due to AI SDK version conflicts
    // TODO: Fix AI SDK compatibility issues
    const enhancedText = text; // Return original text for now
    
    return NextResponse.json({
      code: 0,
      text: enhancedText,
    });

  } catch (error) {
    console.error('Enhanced prompt error:', error);
    return NextResponse.json({
      code: -1,
      messages: "Generation failed",
    });
  }
}
