import router from './router';
import verifyToken from './utils/verifyToken';
import config from './config';

export default {
  init: (userConfig) => {
    Object.keys(userConfig).forEach((key) => {
      config[key] = userConfig[key];
    });
    // console.log(config);
  },

  authRouter: router,

  verifyToken
};
