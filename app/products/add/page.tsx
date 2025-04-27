import { ProductsList } from '@/components';
import { Card } from 'antd';
import Title from 'antd/es/typography/Title';

export default function ProductsAdd(): React.ReactNode {
  return (
    <>
      <Title>Add product</Title>
      <Card>
        <ProductsList />
      </Card>
    </>
  );
}
