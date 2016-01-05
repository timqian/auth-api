import  User    from '../models/User'; // get our mongoose model
import createToken from '../utils/createToken';
import { checkPassword } from '../utils/crypts';
import config from '../config';


export default async function(req, res) {
  const { email, name, password } = req.body;
  const user = await User.findOne({ $or: [ { name }, { email } ] });

  // console.log('login', config);
  if (!user) {
    res.status(400).json({ success: false, message: config.USER_MESSAGE.USER_NOT_FOUND });
  } else if (user) {

    // check if password matches
    const result = await checkPassword(password, user.password);
    if ( !result ) {
      res.status(400).json({ success: false, message: config.USER_MESSAGE.WRONG_PASSWORD });
    } else {
      // if user is found and password is right
      // create a token
      const payload = { name: user.name, verified: user.verified };
      const token = createToken(payload, config.CLIENT_TOKEN_EXPIRES_IN);

      // return the information including token as JSON
      res.status(200).json({
        success: true,
        message: `${config.USER_MESSAGE.LOGIN_SUCCESS} ${user.name}`,
        name: user.name,
        token: token
      });
    }
  }
}
