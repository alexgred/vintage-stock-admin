'use client';

import { productDelete } from "@/actions";
import { ROUTES } from "@/config";
import { useRouter } from "next/navigation";

export function  useProductDelete(id: number) {
  const router = useRouter();

  const deleteHandler = async () => {
    const result = await productDelete(id);

    if (result.success) {
      router.push(ROUTES.PRODUCTS);
    }
  };

  return deleteHandler;
};