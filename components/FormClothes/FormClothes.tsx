'use client';

import { Card, Form, Input, InputNumber, Radio, Select, Switch } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { Button } from '../Button';
import { ROUTES } from '@/config';
import { Clothing, Conditions, Sizes } from '@/types';
import { productDelete, productEdit } from '@/actions';
import { productAdd } from '@/actions/productAdd';

const labels = {
  name: 'Название',
  description: 'Описание',
  brand: 'Бренд',
  conditions: 'Состояние',
  sizes: 'Размер',
  sold: 'Продано',
  reserved: 'Забронировано',
  cost: 'Себестоимость',
  price: 'Цена',
};

export default function FormClothes({
  productId,
  data,
  conditions,
  sizes,
}: {
  productId?: number;
  data?: Clothing;
  conditions: Conditions;
  sizes: Sizes;
}): React.ReactNode {
  const submitHandler = (data: FormData) => {
    if (productId) {
      productEdit(productId, data);
    } else {
      productAdd(data);
    }
  };

  return (
    <Card style={{ maxWidth: 800, margin: 'auto' }}>
      <Form
        name="add-clothes"
        layout="vertical"
        onFinish={submitHandler}
        initialValues={{
          ['price']: data?.price || 0,
          ['cost']: data?.cost || 0,
          ['name']: data?.name || '',
          ['description']: data?.description || '',
          ['brand']: data?.brand || '',
          ['conditionId']: data?.conditions.id,
          ['sizeId']: data?.sizes.id,
          ['sold']: data?.sold || false,
          ['reserved']: data?.reserved || false,
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
            label={labels.conditions}
            name="conditionId"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}>
            <Select
              showSearch
              optionFilterProp="label"
              options={conditions?.map((conditions) => ({
                label: conditions.name,
                value: conditions.id,
              }))}
            />
          </FormItem>
        </FormItem>

        <FormItem
          label={labels.sizes}
          name="sizeId"
          rules={[{ required: true }]}>
          <Radio.Group
            optionType="button"
            buttonStyle="solid"
            options={sizes?.map((sizes) => ({
              label: sizes.name,
              value: sizes.id,
            }))}
          />
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
          {productId && (
            <FormItem
              style={{
                display: 'inline-block',
                marginRight: '12px',
              }}>
              <Button
                variant="solid"
                htmlType="button"
                color="danger"
                onClick={() => productDelete(productId)}>
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
                productId
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
