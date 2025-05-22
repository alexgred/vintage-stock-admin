'use client';

import Link from 'next/link';
import { Pagination as PaginationAntD } from 'antd';
import { ROUTES } from '@/config';
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import styles from './Pagination.module.css';

const prefixCls = 'ant-pagination';

export default function Pagination({
  current = 1,
  total = 1,
}: {
  current?: number;
  total?: number;
}): React.ReactNode {
  return (
    <PaginationAntD
      style={{ marginTop: '24px' }}
      align="center"
      defaultCurrent={current}
      defaultPageSize={1}
      total={total}
      itemRender={(page, type, originalElement) => {
        switch (type) {
          case 'page':
            return (
              <Link
                href={`${ROUTES.PRODUCTS}?page=${page}`}
                className={`${prefixCls}-item-link`}>
                {page}
              </Link>
            );
          case 'prev':
            return (
              <Link
                href={`${ROUTES.PRODUCTS}?page=${page}`}
                className={`${prefixCls}-item-link ${styles.link}`}>
                <LeftOutlined
                  color="white"
                  className={`${prefixCls}-item-link-icon`}
                />
              </Link>
            );
          case 'next':
            return (
              <Link
                href={`${ROUTES.PRODUCTS}?page=${page}`}
                className={`${prefixCls}-item-link ${styles.link}`}>
                <RightOutlined
                  color="white"
                  className={`${prefixCls}-item-link-icon`}
                />
              </Link>
            );
          case 'jump-prev':
            return (
              <Link
                href={`${ROUTES.PRODUCTS}?page=${page}`}
                className={`${prefixCls}-item-link`}>
                <div className={`${prefixCls}-item-container`}>
                  <DoubleLeftOutlined
                    color="white"
                    className={`${prefixCls}-item-link-icon`}
                  />
                  <span className={`${prefixCls}-item-ellipsis`}>•••</span>
                </div>
              </Link>
            );
          case 'jump-next':
            return (
              <Link
                href={`${ROUTES.PRODUCTS}?page=${page}`}
                className={`${prefixCls}-item-link`}>
                <div className={`${prefixCls}-item-container`}>
                  <DoubleRightOutlined
                    color="white"
                    className={`${prefixCls}-item-link-icon`}
                  />
                  <span className={`${prefixCls}-item-ellipsis`}>•••</span>
                </div>
              </Link>
            );
          default:
            return originalElement;
        }
      }}
    />
  );
}
