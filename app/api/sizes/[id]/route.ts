import { prisma } from '@/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const size = await prisma.sizes.findUnique({
      where: { id: Number(id) },
    });

    if (!size) {
      return NextResponse.json({ error: 'Size not found' }, { status: 404 });
    }

    return NextResponse.json(size);
  } catch (error) {
    console.error('Error fetching size:', error);

    return NextResponse.json(
      { error: 'Failed to fetch size' },
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

    const updatedSize = await prisma.sizes.update({
      where: { id: Number(id) },
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(updatedSize);
  } catch (error) {
    console.error('Error updating size:', error);

    return NextResponse.json(
      { error: 'Failed to update size' },
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
    const productsWithSize = await prisma.clothes.findFirst({
      where: { size_id: Number(id) },
    });

    if (productsWithSize) {
      return NextResponse.json(
        { error: 'Cannot delete size that is in use by products' },
        { status: 400 },
      );
    }

    await prisma.sizes.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Size deleted successfully' });
  } catch (error) {
    console.error('Error deleting size:', error);

    return NextResponse.json(
      { error: 'Failed to delete size' },
      { status: 500 },
    );
  }
}
