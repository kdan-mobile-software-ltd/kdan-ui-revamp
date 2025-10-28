type EnvType = 'development' | 'preparing' | 'production';

const env = (process?.env?.['ENV'] || process?.env?.['NODE_ENV'] || 'production') as EnvType;

const configs = {
  development: {
    HOST: '',
    KDAN_S3_STORAGE: 'https://files.kdanmobile.com/web-assets',
    COMMON_WIDGET_HOST: 'https://cw-static.kdan.com/preparing',
  },
  preparing: {
    HOST: '',
    KDAN_S3_STORAGE: 'https://files.kdanmobile.com/web-assets',
    COMMON_WIDGET_HOST: 'https://cw-static.kdan.com/preparing',
  },
  production: {
    HOST: 'https://kdan-ui.kdanmobile.com',
    KDAN_S3_STORAGE: 'https://files.kdanmobile.com/web-assets',
    COMMON_WIDGET_HOST: 'https://cw-static.kdan.com/preparing',
  },
};

const config = configs[env] || configs.production;

export const {
  HOST,
  KDAN_S3_STORAGE,
  COMMON_WIDGET_HOST,
} = config;
