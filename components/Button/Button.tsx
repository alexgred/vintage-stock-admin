'use client';

import { Button as ButtonAntD } from 'antd';
import type { ButtonProps } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Button(props: ButtonProps): React.ReactNode {
  const { children } = props;
  const newProps = { ...props };
  const router = useRouter();

  useEffect(() => {
    if (router && props.href) {
      router.prefetch(props.href);
    }
  }, [router, props.href]);

  if (props.href) {
    const url = props.href;
    delete newProps.href;

    newProps.onClick = () => {
      router.push(url);
    };
  }

  return <ButtonAntD {...newProps}>{children}</ButtonAntD>;
}
