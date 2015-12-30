import user from './routes/user';
import verifyToken from './utils/verifyToken';

export default {
  init: (userConfig) => {
    Object.keys(userConfig).forEach((key) => {
      if (key) global.authApi[key] = userConfig[key];
    });
    console.log(global.authApi.EMAIL_RECEIVING_VERIFICATION);
  },

  authRouter: user,

  verifyToken
};
