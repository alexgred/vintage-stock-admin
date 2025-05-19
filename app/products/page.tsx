import { PlusCircleOutlined } from '@ant-design/icons';
import { ProductsFilters, Table, Button } from '@/components';
import { Card, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { ROUTES } from '@/config';

const data = await fetch('http://localhost:3000/api/products', {
  method: 'get',
});
// const post = data.json();

console.log(data);

export default function Products(): React.ReactNode {
  return (
    <>
      <Title>Products</Title>
      <Card>
        <Flex justify="space-between" align="flex-start">
          <ProductsFilters />
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            href={ROUTES.PRODUCTS_ADD}>
            Add product
          </Button>
        </Flex>
      </Card>
      <Card>
        <Table />
      </Card>
    </>
  );
}
