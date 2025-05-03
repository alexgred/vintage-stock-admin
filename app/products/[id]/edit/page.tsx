import { FormClothes } from '@/components';
import { Card } from 'antd';
import Title from 'antd/es/typography/Title';

export default async function ProductEdit({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<React.ReactNode> {
  const { id } = await params;

  return (
    <>
      <Title>Изменить {id}</Title>
      <Card>
        <FormClothes edit productId={id} />
      </Card>
    </>
  );
}
