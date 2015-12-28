import  User    from '../../models/User'; // get our mongoose model
import createToken from '../../utils/createToken';
import { checkPassword } from '../../utils/crypts';

import { USER_MESSAGE } from '../../config';
const { USER_NOT_FOUND, WRONG_PASSWORD, LOGIN_SUCCESS } = USER_MESSAGE;

export default async function(req, res) {
  const { email, name, password } = req.body;
  const user = await User.findOne({ $or: [ { name }, { email } ] });

  if (!user) {
    res.status(400).json({ success: false, message: USER_NOT_FOUND });
  } else if (user) {

    // check if password matches
    const result = await checkPassword(password, user.password);
    if ( !result ) {
      res.status(400).json({ success: false, message: WRONG_PASSWORD });
    } else {

      // if user is found and password is right
      // create a token
      const payload = { name: user.name, verified: user.verified };
      const token = createToken(payload);

      // return the information including token as JSON
      res.status(200).json({
        success: true,
        message: `${LOGIN_SUCCESS} ${user.name}`,
        name: user.name,
        token: token
      });
    }
  }
}
