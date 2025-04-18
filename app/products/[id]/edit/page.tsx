export default async function ProductEdit({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return <div>Product edit: {id}</div>;
}
