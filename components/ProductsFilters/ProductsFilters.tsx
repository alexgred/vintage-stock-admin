'use client';

import { Select, Space, Switch } from "antd";
import Search from "antd/es/input/Search";

export default function ProductsFilters(): React.ReactNode {

  return (
    <Space className="products-filters" align="center">
      <Search
        placeholder="input search text"
        onSearch={() => console.log('jhk')}
        enterButton
      />
      <Select
        placeholder="Size"
        optionFilterProp="label"
        options={[
          {
            value: 'xs',
            label: 'xs',
          },
          {
            value: 's',
            label: 's',
          },
          {
            value: 'm',
            label: 'm',
          },
          {
            value: 'l',
            label: 'l',
          },
          {
            value: 'xl',
            label: 'xl',
          },
        ]}
      />
      <div>
        <Switch checkedChildren="Продано" unCheckedChildren="В продаже" />
      </div>
    </Space>
  );
}
