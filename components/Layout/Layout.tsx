'use client';

import { useState } from 'react';
import { Button, ConfigProvider, Layout as LayoutAntD } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { config } from '@/config';

import styles from './Layout.module.css';
import { Sidebar } from '../Sidebar';


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider theme={config}>
      <LayoutAntD style={{ minHeight: '100vh' }} hasSider>
        <Sidebar collapsed={collapsed} />
        <LayoutAntD>
          <Header className={styles.header}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content className={styles.content}>{children}</Content>
        </LayoutAntD>
      </LayoutAntD>
    </ConfigProvider>
  );
}
