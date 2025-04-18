import { MenuProps } from 'antd';
import {
  HomeOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const labels: Record<string, string> = {
  home: 'Главная',
  products: 'Список товаров',
  productsGroup: 'Товары',
  productAdd: 'Добавить товар',
  profile: 'Профиль',
};

export const itemsSidebar: MenuProps['items'] = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: <Link href="/" title={labels.home}>{labels.home}</Link>,
  },
  {
    key: 'productsGroup',
    icon: <ShoppingOutlined />,
    label: labels.productsGroup,
    children: [
      {
        key: 'products',
        label: <Link href="/products" title={labels.products}>{labels.products}</Link>,
      },
      {
        key: 'productAdd',
        label: <Link href="/products/add" title={labels.productAdd}>{labels.productAdd}</Link>,
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'profile',
    icon: <UserOutlined />,
    label: <Link href="/profile" title={labels.profile}>{labels.profile}</Link>,
  },
];
