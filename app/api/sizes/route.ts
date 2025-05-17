import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sizes = await prisma.sizes.findMany();

    return NextResponse.json(sizes);
  } catch (error) {
    console.error('Error:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 },
    );
  }
}