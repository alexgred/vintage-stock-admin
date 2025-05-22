import { prisma } from '@/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const condition = await prisma.conditions.findUnique({
      where: { id: Number(id) },
    });

    if (!condition) {
      return NextResponse.json(
        { error: 'Condition not found' },
        { status: 404 },
      );
    }

    return NextResponse.json(condition);
  } catch (error) {
    console.error('Error fetching condition:', error);

    return NextResponse.json(
      { error: 'Failed to fetch condition' },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const body = await request.json();
    const { id } = await params;

    if (!body.name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const updatedCondition = await prisma.conditions.update({
      where: { id: Number(id) },
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(updatedCondition);
  } catch (error) {
    console.error('Error updating condition:', error);

    return NextResponse.json(
      { error: 'Failed to update condition' },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const productsWithCondition = await prisma.clothes.findFirst({
      where: { condition_id: Number(id) },
    });

    if (productsWithCondition) {
      return NextResponse.json(
        { error: 'Cannot delete condition that is in use by products' },
        { status: 400 },
      );
    }

    await prisma.conditions.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Condition deleted successfully' });
  } catch (error) {
    console.error('Error deleting condition:', error);

    return NextResponse.json(
      { error: 'Failed to delete condition' },
      { status: 500 },
    );
  }
}
