## 注册：

POST /user/signup

    body: {
      name: String,
      password: String
    }

返回

    {
      success: Boolean,
      massage: String
    }

## 登录：

POST /user/login

    body: {
      name: String,
      password: String
    }

返回

    {
      success: Boolean,
      token: String
    }

## 访问受保护的 Route：

GET /profile

    params: {
      token: String
    }

验证成功：返回

    {
      name: String
    }

验证失败：返回

    {
      success: false,
      message: String
    }
