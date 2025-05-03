import { FormClothes } from '@/components';
import { Card } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';

export default async function ProductsType(): Promise<React.ReactNode> {
  return (
    <>
      <Title>Добавить одежду</Title>
      <Card>
        <FormClothes />
      </Card>
    </>
  );
}
