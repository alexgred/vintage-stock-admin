import { Flex } from 'antd';

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <Flex vertical={true} gap="large">
      {children}
    </Flex>
  );
}
