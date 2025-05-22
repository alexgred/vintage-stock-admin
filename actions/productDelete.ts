'use server';

import { ROUTES } from '@/config';
import { redirect } from 'next/navigation';

export async function productDelete(id: number) {
  let status: boolean = false;

  try {
    const response = await fetch(`http://localhost:3000/api/clothes/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product, status ${response.status}`);
    }

    status = true;
  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (status) {
      redirect(`${ROUTES.PRODUCTS}`);
    }
  }
}
