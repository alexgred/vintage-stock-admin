import { ButtonsClothes } from '@/components';
import { Card, Descriptions, Divider, Space } from 'antd';
import Title from 'antd/es/typography/Title';

export default async function Product({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<React.ReactNode> {
  const { id } = await params;

  return (
    <>
      <Title>Товар {id}</Title>
      <Card>
        <Space size="large">
          <Descriptions title="Информация" column={2}>
            <Descriptions.Item label="Описание" span={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Descriptions.Item>
            <Descriptions.Item label="Бренд">Channel</Descriptions.Item>
            <Descriptions.Item label="Состояние">Новое</Descriptions.Item>
            <Descriptions.Item label="Размер">XL</Descriptions.Item>
            <Descriptions.Item label="Статус">Продано</Descriptions.Item>
            <Descriptions.Item label="Цена" span={2}>
              4 000 ₽
            </Descriptions.Item>
          </Descriptions>
        </Space>
        <Divider type="horizontal" />
        <ButtonsClothes id={id} />
      </Card>
    </>
  );
}