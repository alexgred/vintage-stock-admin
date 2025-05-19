'use client';

import { Card, Form, Input, InputNumber, Select, Switch } from 'antd';
import { default as Checkbox } from 'antd/es/checkbox/Group';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { Button } from '../Button';
import { ROUTES } from '@/config';

interface Size {
  label: string;
  value: string;
}
type Sizes = Size[];

const labels = {
  name: 'Название',
  description: 'Описание',
  brand: 'Бренд',
  condition: 'Состояние',
  size: 'Размер',
  sold: 'Продано',
  reserved: 'Забронировано',
  cost: 'Себестоимость',
  price: 'Цена',
};

const options: Sizes = [
  { label: 'XS', value: 'xs' },
  { label: 'S', value: 's' },
  { label: 'M', value: 'm' },
  { label: 'L', value: 'l' },
  { label: 'XL', value: 'xl' },
  { label: 'XXL', value: 'xxl' },
];

export default function FormClothes({
  edit,
  productId,
}: {
  edit?: boolean;
  productId?: number;
}): React.ReactNode {
  return (
    <Card style={{ maxWidth: 800, margin: 'auto' }}>
      <Form
        name="add-clothes"
        layout="vertical"
        initialValues={{
          ['price']: 0,
        }}>
        <FormItem label={labels.name} name="name" rules={[{ required: true }]}>
          <Input allowClear />
        </FormItem>

        <FormItem label={labels.description} name="description">
          <TextArea allowClear />
        </FormItem>

        <FormItem>
          <FormItem
            label={labels.brand}
            name="brand"
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
            }}>
            <Input allowClear />
          </FormItem>

          <FormItem
            label={labels.condition}
            name="condition"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Select
              showSearch
              optionFilterProp="label"
              options={[
                {
                  value: 'new',
                  label: 'Новое',
                },
                {
                  value: 'ideal',
                  label: 'Идеальное состояние',
                },
                {
                  value: 'used',
                  label: 'Была в пользование',
                },
              ]}
            />
          </FormItem>
        </FormItem>

        <FormItem label={labels.size} name="size" rules={[{ required: true }]}>
          <Checkbox options={options} />
        </FormItem>

        <FormItem>
          <FormItem
            name="cost"
            label={labels.cost}
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <InputNumber
              min={0}
              controls={false}
              style={{ width: '100%' }}
              addonBefore="₽"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
              }
            />
          </FormItem>
          <FormItem
            name="price"
            label={labels.price}
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
            }}>
            <InputNumber
              min={0}
              controls={false}
              style={{ width: '100%' }}
              addonBefore="₽"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
              }
            />
          </FormItem>
        </FormItem>

        <FormItem>
          <FormItem
            name="sold"
            style={{
              display: 'inline-block',
              marginRight: '12px',
            }}>
            <Switch
              checkedChildren={labels.sold}
              unCheckedChildren={labels.sold}
            />
          </FormItem>
          <FormItem
            name="reserved"
            style={{
              display: 'inline-block',
            }}>
            <Switch
              checkedChildren={labels.reserved}
              unCheckedChildren={labels.reserved}
            />
          </FormItem>
        </FormItem>

        <FormItem>
          <FormItem
            style={{
              display: 'inline-block',
              marginRight: '12px',
            }}>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </FormItem>
          {edit && (
            <FormItem
              style={{
                display: 'inline-block',
                marginRight: '12px',
              }}>
              <Button variant="solid" htmlType="button" color="danger">
                Удалить
              </Button>
            </FormItem>
          )}
          <FormItem
            style={{
              display: 'inline-block',
            }}>
            <Button
              htmlType="button"
              href={
                edit && productId
                  ? `${ROUTES.PRODUCTS}/${productId}`
                  : ROUTES.PRODUCTS_ADD
              }>
              Отмена
            </Button>
          </FormItem>
        </FormItem>
      </Form>
    </Card>
  );
}
