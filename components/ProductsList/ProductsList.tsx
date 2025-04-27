'use client';

import { List } from 'antd';
import { SkinOutlined, CoffeeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Button } from '../Button';
import { routes } from '@/config';

const data = [
  {
    title: 'Одежда',
    description: 'Винтажная одежда, бриллиантики',
    icon: <SkinOutlined style={{ fontSize: '24px', marginTop: '8px' }} />,
    link: routes.PRODUCTS_CLOTHES
  },
  {
    title: 'Напитки',
    description: 'Черный кофе, классика, чай',
    icon: <CoffeeOutlined style={{ fontSize: '24px', marginTop: '8px' }} />,
    link: routes.PRODUCTS_DRINKS,
  },
];

export default function ProductsList(): React.ReactNode {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button key={item.title} type="primary" href={item.link}>
              Добавить
            </Button>,
          ]}>
          <List.Item.Meta
            avatar={item.icon}
            title={<Link href={item.link}>{item.title}</Link>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}
