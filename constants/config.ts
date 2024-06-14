type EnvType = 'development' | 'preparing' | 'production';

const env = (process?.env?.['ENV'] || process?.env?.['NODE_ENV'] || 'production') as EnvType;

const configs = {
  development: {
    HOST: '',
    KDAN_S3_STORAGE: 'https://files.kdanmobile.com/web-assets',
  },
  preparing: {
    HOST: '',
    KDAN_S3_STORAGE: 'https://files.kdanmobile.com/web-assets',
  },
  production: {
    HOST: 'https://kdan-ui.kdanmobile.com',
    KDAN_S3_STORAGE: 'https://files.kdanmobile.com/web-assets',
  },
};

const config = configs[env];

export const {
  HOST,
  KDAN_S3_STORAGE,
} = config;
