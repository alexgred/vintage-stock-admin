import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout } from '@/components';
import '@ant-design/v5-patch-for-react-19';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vintage Stock Admin',
  description: 'Admin panel for Vintage Stock',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang="ru">
      <body>
        <AntdRegistry>
          <Layout>{children}</Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
