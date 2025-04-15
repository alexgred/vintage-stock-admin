import { theme, type ThemeConfig } from "antd";

export const colorBgBase = '#17191d';

export const config: ThemeConfig = {
  cssVar: false,
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgBase: colorBgBase,
    borderRadius: 8,
  },
  components: {
    Layout: {
      headerBg: colorBgBase,
      siderBg: colorBgBase,
      bodyBg: colorBgBase,
      algorithm: true,
    },
  },
};
