'use client';

import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function Breadcrumbs(): React.ReactNode {
  const segments = useSelectedLayoutSegments();

  let path = '';
  const items = segments.map((segment, index) => {
    if (index === segments.length - 1) {
      return {
        key: segment + index.toString(),
        title: segment,
      };
    } else {
      path += '/' + segment;

      return {
        key: segment + index.toString(),
        title: <Link href={`${path}`}>{segment}</Link>,
      };
    }
  });
  items.unshift({
    key: 'home',
    title: <Link href="/">Главная</Link>,
  });

  return segments.length > 0 && <Breadcrumb items={items} />;
}
