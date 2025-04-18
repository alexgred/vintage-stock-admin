import React from "react";

export default async function ProductsType({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<React.ReactNode> {
  const { type } = await params;

  return <div>Products type: {type}</div>;
}
