import  User    from '../../models/User'; // get our mongoose model
import createToken from '../../utils/createToken';
import { USER_MESSAGE } from '../../config';
const { USER_NOT_FOUND, WRONG_PASSWORD } = USER_MESSAGE;

export default async function(req, res) {
  const { email, name, password } = req.body;

  // find the user and
  const user = await User.findOne({ $or: [ { name }, { email } ] });

  if (!user) {
    res.json({ success: false, message: USER_NOT_FOUND });
  } else if (user) {

    // check if password matches
    if (user.password !== password) {
      res.json({ success: false, message: WRONG_PASSWORD });
    } else {

      // if user is found and password is right
      // create a token
      const payload = { name: user.name, verified: user.verified };
      const token = createToken(payload);

      // return the information including token as JSON
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
    }
  }
}
