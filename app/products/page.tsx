import { PlusCircleOutlined } from '@ant-design/icons';
import { ProductsFilters, Table } from '@/components';
import { Button, Card, Flex } from 'antd';
import styles from './products.module.css';

export default function Products(): React.ReactNode {
  return (
    <Flex vertical={true} gap="large">
      <h1 className={styles.title}>Products</h1>
      <Card>
        <Flex justify="space-between" align="flex-start">
          <ProductsFilters />
          <Button
            type="primary"
            href="/products/add"
            icon={<PlusCircleOutlined />}>
            Add product
          </Button>
        </Flex>
      </Card>
      <Card>
        <Table />
      </Card>
    </Flex>
  );
}
