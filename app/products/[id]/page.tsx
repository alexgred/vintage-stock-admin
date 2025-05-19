import { ButtonsClothes } from '@/components';
import { Clothing } from '@/types';
import { Card, Descriptions, Divider, Space } from 'antd';
import Title from 'antd/es/typography/Title';

export default async function Product({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<React.ReactNode> {
  const { id } = await params;
  const data = await fetch(`http://localhost:3000/api/clothes/${id}`, {
    next: {
      tags: [`product-${id}`],
    },
  });
  const posts: Clothing = await data.json();

  let status = 'Не продано';

  if (posts.sold) {
    status = 'Продано';
  } else if (posts.reserved) {
    status = 'Забронировано';
  }

  return (
    <>
      <Title>Товар {id}</Title>
      <Card>
        <Space size="large">
          <Descriptions title="Информация" column={2}>
            <Descriptions.Item label="Описание" span={2}>
              {posts.description}
            </Descriptions.Item>
            <Descriptions.Item label="Бренд">{posts.brand}</Descriptions.Item>
            <Descriptions.Item label="Состояние">
              {posts.conditions.name}
            </Descriptions.Item>
            <Descriptions.Item label="Размер">
              {posts.sizes.name}
            </Descriptions.Item>
            <Descriptions.Item label="Статус">{status}</Descriptions.Item>
            <Descriptions.Item label="Цена" span={2}>
              {posts.price} ₽
            </Descriptions.Item>
          </Descriptions>
        </Space>
        <Divider type="horizontal" />
        <ButtonsClothes id={id} sold={posts.sold} reserved={posts.reserved} />
      </Card>
    </>
  );
}
