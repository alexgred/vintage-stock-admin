'use client';

import { useState } from 'react';
import { Button, Layout as Wrapper } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [collapsed, setCollapsed] = useState(false);

  return (
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
        <Content>{children}</Content>
      </Wrapper>
    </Wrapper>
  );
}
