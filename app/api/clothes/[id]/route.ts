import { prisma } from '@/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const clothing = await prisma.clothes.findUnique({
      where: { id: Number(id) },
      include: {
        conditions: true,
        sizes: true,
      },
    });

    if (!clothing) {
      return NextResponse.json(
        { error: 'Clothing item not found' },
        { status: 404 },
      );
    }

    return NextResponse.json(clothing);
  } catch (error) {
    console.error('Error fetching clothing item:', error);

    return NextResponse.json(
      { error: 'Failed to fetch clothing item' },
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

    const updatedClothing = await prisma.clothes.update({
      where: { id: Number(id) },
      data: {
        name: body.name,
        brand: body.brand,
        description: body.description || '',
        condition_id: body.conditionId ? Number(body.conditionId) : undefined,
        size_id: body.sizeId ? Number(body.sizeId) : undefined,
        cost: body.cost !== undefined ? Number(body.cost) : 0,
        price: body.price !== undefined ? Number(body.price) : 0,
        sold: body.sold !== undefined ? Boolean(body.sold) : false,
        reserved: body.reserved !== undefined ? Boolean(body.reserved) : false,
      },
      include: {
        conditions: true,
        sizes: true,
      },
    });

    return NextResponse.json(updatedClothing);
  } catch (error) {
    console.error('Error updating clothing item:', error);

    return NextResponse.json(
      { error: 'Failed to update clothing item' },
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
    const existingItem = await prisma.clothes.findUnique({
      where: { id: Number(id) },
    });

    if (!existingItem) {
      return NextResponse.json(
        { error: 'Clothing item not found' },
        { status: 404 },
      );
    }

    await prisma.clothes.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Clothing item deleted successfully' });
  } catch (error) {
    console.error('Error deleting clothing item:', error);

    return NextResponse.json(
      { error: 'Failed to delete clothing item' },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updatedClothing = await prisma.clothes.update({
      where: { id: Number(id) },
      data: {
        ...body,
      },
    });

    return NextResponse.json(updatedClothing);
  } catch (error) {
    console.error('Error updating clothing item:', error);

    return NextResponse.json(
      { error: 'Failed to update clothing item' },
      { status: 500 },
    );
  }
}
