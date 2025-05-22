import { PlusCircleOutlined } from '@ant-design/icons';
import { ProductsFilters, Table, Button } from '@/components';
import { Card, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { ROUTES } from '@/config';
import { Clothing, DataClothing } from '@/types';

export default async function Products(): Promise<React.ReactNode> {
  const productsData = await fetch('http://localhost:3000/api/clothes', {
    method: 'get',
  });
  const sizesData = await fetch('http://localhost:3000/api/sizes', {
    method: 'get',
  });
  const conditionsData = await fetch('http://localhost:3000/api/conditions', {
    method: 'get',
  });

  const sizes = await sizesData.json();
  const conditions = await conditionsData.json();
  const products: Clothing[] = await productsData.json();

  const data: DataClothing[] = products.map((product: Clothing) => {
    let status = 'Не продано';
    if (product.is_sold) {
      status = 'Продано';
    } else if (product.is_reserved) {
      status = 'Забронировано';
    }
    return {
      key: product.id.toString(),
      name: product.name,
      brand: product.brand,
      condition: product.conditions.name,
      size: product.sizes.name,
      cost: product.cost,
      price: product.price,
      status: status,
    };
  });

  return (
    <>
      <Title>Products</Title>
      <Card>
        <Flex justify="space-between" align="flex-start">
          <ProductsFilters sizes={sizes} conditions={conditions} />
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            href={ROUTES.PRODUCTS_ADD}>
            Add product
          </Button>
        </Flex>
      </Card>
      <Card>
        <Table data={data} />
      </Card>
    </>
  );
}
