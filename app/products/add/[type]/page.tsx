export default async function ProductsType({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  return <div>Products type: {type}</div>;
}
