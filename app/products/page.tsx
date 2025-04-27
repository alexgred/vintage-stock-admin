import { PlusCircleOutlined } from '@ant-design/icons';
import { ProductsFilters, Table, Button } from '@/components';
import { Card, Flex } from 'antd';
import Title from 'antd/es/typography/Title';

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
            href="/products/add">
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
