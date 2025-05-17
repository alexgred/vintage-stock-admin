import { prisma } from '@/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const sizes = await prisma.sizes.findMany({
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(sizes);
  } catch (error) {
    console.error('Error fetching sizes:', error);

    return NextResponse.json(
      { error: 'Failed to fetch sizes' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const size = await prisma.sizes.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(size, { status: 201 });
  } catch (error) {
    console.error('Error creating size:', error);

    return NextResponse.json(
      { error: 'Failed to create size' },
      { status: 500 }
    );
  }
}
