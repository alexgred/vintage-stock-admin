import { MenuProps } from 'antd';
import {
  HomeOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { routes, labels } from './constants';

export const itemsSidebar: MenuProps['items'] = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: (
      <Link href={routes.HOME} title={labels.HOME}>
        {labels.HOME}
      </Link>
    ),
  },
  {
    key: 'productsGroup',
    icon: <ShoppingOutlined />,
    label: labels.PRODUCTS_GROUP,
    children: [
      {
        key: 'products',
        label: (
          <Link href={routes.PRODUCTS} title={labels.PRODUCTS}>
            {labels.PRODUCTS}
          </Link>
        ),
      },
      {
        key: 'productsAdd',
        label: (
          <Link href={routes.PRODUCTS_ADD} title={labels.PRODUCTS_ADD}>
            {labels.PRODUCTS_ADD}
          </Link>
        ),
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'profile',
    icon: <UserOutlined />,
    label: (
      <Link href={routes.PROFILE} title={labels.PROFILE}>
        {labels.PROFILE}
      </Link>
    ),
  },
];
