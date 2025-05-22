'use server';

import { revalidateTag } from 'next/cache';

export async function productReserved(id: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/clothes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ is_reserved: true }),
    });

    if (!response.ok) {
      throw new Error(`Failed to change product, status ${response.status}`);
    }

    revalidateTag(`product-${id}`);
  } catch (error) {
    console.error('Error:', error);
  }
}
