'use client';

import { useState } from 'react';
import { Button, ConfigProvider, Layout as Wrapper } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { config } from '@/config';

import styles from './Layout.module.css';


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider theme={config}>
      <Wrapper style={{ minHeight: '100vh' }} hasSider>
        <Sider trigger={null} collapsible collapsed={collapsed} width="20%">
          Sider
        </Sider>
        <Wrapper>
          <Header>
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
        </Wrapper>
      </Wrapper>
    </ConfigProvider>
  );
}
