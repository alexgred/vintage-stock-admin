import { prisma } from '@/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get('page')) || 1;

  const pageSize = 2;

  try {
    const products = await prisma.clothes.findMany({
      include: {
        conditions: true,
        sizes: true,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    const total = await prisma.clothes.count();
    const totalPages = Math.ceil(total / pageSize);

    return NextResponse.json({ products, total: totalPages });
  } catch (error) {
    console.error('Error fetching products:', error);

    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const product = await prisma.clothes.create({
      data: {
        name: body.name,
        brand: body.brand,
        description: body.description || '',
        condition_id: Number(body.condition_id),
        size_id: Number(body.size_id),
        cost: Number(body.cost) || 0,
        price: Number(body.price) || 0,
        is_sold: body.is_sold || false,
        is_reserved: body.is_reserved || false,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);

    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 },
    );
  }
}
