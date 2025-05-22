'use client';

import { Select, Space, Switch } from 'antd';
import Search from 'antd/es/input/Search';
import { Conditions, Sizes } from '@/types';

export default function ProductsFilters({
  conditions,
  sizes,
}: {
  conditions: Conditions;
  sizes: Sizes;
}): React.ReactNode {
  return (
    <Space className="products-filters" align="center">
      <Search
        placeholder="Поиск"
        onSearch={() => console.log('jhk')}
        enterButton
      />
      <Select
        placeholder="Размер"
        optionFilterProp="label"
        options={sizes.map((size) => ({
          value: size.id,
          label: size.name,
        }))}
      />
      <Select
        placeholder="Состояние"
        optionFilterProp="label"
        style={{ width: 200 }}
        options={conditions.map((condition) => ({
          value: condition.id,
          label: condition.name,
        }))}
      />
      <div>
        <Switch checkedChildren="Продано" unCheckedChildren="В продаже" />
      </div>
    </Space>
  );
}
