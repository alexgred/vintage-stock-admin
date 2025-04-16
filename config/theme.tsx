import { theme, type ThemeConfig } from "antd";

export const colorBgBase = '#17191d';
export const colorBgBody = 'color-mix(in srgb, #17191d, grey 3%)';
export const itemActiveBg = 'var(--ant-color-primary)';
export const itemSelectedBg = 'var(--ant-color-primary)';
export const itemSelectedColor = 'var(--ant-color-text-base)';

export const config: ThemeConfig = {
  cssVar: true,
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgBase: colorBgBase,
    borderRadius: 8,
  },
  components: {
    Layout: {
      headerBg: colorBgBase,
      siderBg: colorBgBase,
      bodyBg: colorBgBody,
      algorithm: true,
    },
    Menu: {
      itemBg: colorBgBase,
      itemSelectedBg: itemSelectedBg,
      itemSelectedColor: itemSelectedColor,
    },
  },
};
