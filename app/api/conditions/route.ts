import { prisma } from '@/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const conditions = await prisma.conditions.findMany({
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(conditions);
  } catch (error) {
    console.error('Error fetching conditions:', error);

    return NextResponse.json(
      { error: 'Failed to fetch conditions' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const condition = await prisma.conditions.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(condition, { status: 201 });
  } catch (error) {
    console.error('Error creating condition:', error);

    return NextResponse.json(
      { error: 'Failed to create condition' },
      { status: 500 },
    );
  }
}
