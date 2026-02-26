import { NextResponse } from 'next/server';
import { checkBotId } from 'botid/server';

export async function POST(request: Request) {
  const { isBot } = await checkBotId();

  if (isBot) {
    return NextResponse.json(
      { error: 'Access denied — bot detected' },
      { status: 403 },
    );
  }

  // Process the legitimate request
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: `Thanks for reaching out, ${body.name ?? 'traveler'}!`,
  });
}
