import { Card, Form, Input, Select, Switch } from 'antd';
import { default as Checkbox } from 'antd/es/checkbox/Group';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { Button } from '../Button';
import { routes } from '@/config';

interface Size { label: string; value: string };
type Sizes = Size[];

const labels = {
  name: 'Название',
  description: 'Описание',
  brand: 'Бренд',
  condition: 'Состояние',
  size: 'Размер',
  sold: 'Продано',
  reserved: 'Забронировано',
  price: 'Цена',
};

const options: Sizes = [
  { label: 'xs', value: 'xs' },
  { label: 's', value: 's' },
  { label: 'm', value: 'm' },
  { label: 'l', value: 'l' },
  { label: 'xl', value: 'xl' },
];

export default function FormClothes(): React.ReactNode {
  return (
    <Card style={{ maxWidth: 800, margin: 'auto' }}>
      <Form name="add-clothes" layout="vertical">
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

        <FormItem name="price" rules={[{ required: true }]}>
          <Input allowClear />
        </FormItem>

        <FormItem>
          <FormItem
            name="sold"
            style={{
              display: 'inline-block',
              marginRight: '20px',
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
              marginRight: '20px',
            }}>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </FormItem>
          <FormItem
            style={{
              display: 'inline-block',
            }}>
            <Button htmlType="button" href={routes.PRODUCTS_ADD}>
              Отмена
            </Button>
          </FormItem>
        </FormItem>
      </Form>
    </Card>
  );
}
