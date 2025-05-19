'use server';

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { ROUTES } from "@/config";

type Id = number | undefined;


export async function productEdit(id: Id, data: FormData) {
  try {
    console.log(data);
    const response = await fetch(`http://localhost:3000/api/clothes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to change product, status ${response.status}`);
    }

    revalidateTag(`product-${id}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    redirect(`${ROUTES.PRODUCTS}/${id}`);
  }
}