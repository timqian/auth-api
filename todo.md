# 我想要的效果

## 使用时用户给的 config

```javascript
const sampleConfig = {
  APP_NAME: 'STOCK APP',                               // app name
  JWT_SECRET: 'ilovetim',                              // jwt secret
  CLIENT_TOKEN_EXPIRES_IN: 24 * 60 * 60,               // client token expires time
  EMAIL_TOKEN_EXPIRES_IN: 24 * 60 * 60,                // email token expires time

  EMAIL_SENDER: {                                      // used to send mail by nodemailer
    service: 'Gmail',
    auth: {
      user: 'qianlijiang123@gmail.com',
      pass: '321qianqian',
    }
  },

  USER_MESSAGE: {                                      // message sent to client
    MAIL_SENT: 'mail sent',
    NAME_TAKEN: 'Name or email has been taken',
    USER_NOT_FOUND: 'User not found',
    WRONG_PASSWORD: 'wrong password',
    LOGIN_SUCCESS: 'Enjoy your token!',
    NEED_EMAIL_VERIFICATION: 'You need to verify your email first',
  },
}
```

## 关于测试代码

1. babel 编译到lib
2. 使用 lib 中的 index 开启一个服务器
3. 对该服务器进行测试(测试 有自己的 config)

## module 特点

1. easy to use
2. 方便增加功能(修改代码)
