'use client';

import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { itemsSidebar } from '@/config';

import styles from './Sidebar.module.css';


export default function Sidebar({
  collapsed,
}: {
  collapsed: boolean;
}): React.ReactNode {

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width="20%">
      <div className={styles.logo} />
      <Menu mode="inline" items={itemsSidebar} className={styles.menu} />
    </Sider>
  );
}
