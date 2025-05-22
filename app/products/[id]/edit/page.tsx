import { FormClothes } from '@/components';
import { Card } from 'antd';
import Title from 'antd/es/typography/Title';
import { Clothing, Conditions, Sizes } from '@/types';

export default async function ProductEdit({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<React.ReactNode> {
  const { id } = await params;

  const data = await fetch(`http://localhost:3000/api/clothes/${id}`, {
    next: {
      tags: [`product-${id}`],
    },
  });
  const posts: Clothing = await data.json();

  const dataConditions = await fetch(`http://localhost:3000/api/conditions`, {
    next: {
      tags: ['conditions'],
    },
  });
  const conditions: Conditions = await dataConditions.json();

  const dataSizes = await fetch(`http://localhost:3000/api/sizes`, {
    next: {
      tags: ['sizes'],
    },
  });
  const sizes: Sizes = await dataSizes.json();

  return (
    <>
      <Title>Изменить {id}</Title>
      <Card>
        <FormClothes productId={id} data={posts} conditions={conditions} sizes={sizes} />
      </Card>
    </>
  );
}
