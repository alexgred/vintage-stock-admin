export default async function Product({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<React.ReactNode> {
  const { id } = await params;

  return <div>Product id: {id}</div>;
}
