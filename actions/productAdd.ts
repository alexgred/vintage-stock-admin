'use server';

import { redirect } from 'next/navigation';
import { ROUTES } from '@/config';
import { Clothing } from '@/types';

export async function productAdd(body: FormData) {
  let data: Clothing | null = null;

  try {
    const response = await fetch(`http://localhost:3000/api/clothes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to add product, status ${response.status}`);
    }

    data = await response.json();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (data) {
      redirect(`${ROUTES.PRODUCTS}/${data.id}`);
    }
  }
}
