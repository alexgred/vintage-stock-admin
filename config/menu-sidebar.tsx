import { MenuProps } from 'antd';
import {
  HomeOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { ROUTES, LABELS } from './constants';

export const itemsSidebar: MenuProps['items'] = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: (
      <Link href={ROUTES.HOME} title={LABELS.HOME}>
        {LABELS.HOME}
      </Link>
    ),
  },
  {
    key: 'productsGroup',
    icon: <ShoppingOutlined />,
    label: LABELS.PRODUCTS_GROUP,
    children: [
      {
        key: 'products',
        label: (
          <Link href={ROUTES.PRODUCTS} title={LABELS.PRODUCTS}>
            {LABELS.PRODUCTS}
          </Link>
        ),
      },
      {
        key: 'productsAdd',
        label: (
          <Link href={ROUTES.PRODUCTS_ADD} title={LABELS.PRODUCTS_ADD}>
            {LABELS.PRODUCTS_ADD}
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
      <Link href={ROUTES.PROFILE} title={LABELS.PROFILE}>
        {LABELS.PROFILE}
      </Link>
    ),
  },
];
