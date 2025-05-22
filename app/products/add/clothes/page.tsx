import { FormClothes } from '@/components';
import { Card } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import { Conditions, Sizes } from '@/types';

export default async function ProductsType(): Promise<React.ReactNode> {
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
      <Title>Добавить одежду</Title>
      <Card>
        <FormClothes conditions={conditions} sizes={sizes} />
      </Card>
    </>
  );
}
