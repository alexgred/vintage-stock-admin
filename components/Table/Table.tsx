'use client';

import { Table as TableAntD } from 'antd';
import type { TableColumnsType } from 'antd';
import { DataClothing } from '@/types';

export default function Table({
  data,
}: {
  data: DataClothing[];
}): React.ReactNode {
  const columns: TableColumnsType<DataClothing> = [
    {
      title: 'Название',
      dataIndex: 'name',
    },
    {
      title: 'Бренд',
      dataIndex: 'brand',
      sorter: (a, b) => a.brand.localeCompare(b.brand),
    },
    {
      title: 'Состояние',
      dataIndex: 'condition',
    },
    {
      title: 'Размер',
      dataIndex: 'size',
    },
    {
      title: 'Себестоимость',
      dataIndex: 'cost',
      sorter: (a, b) => a.cost - b.cost,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
    },
  ];

  return (
    <>
      <TableAntD
        bordered={true}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </>
  );
}
