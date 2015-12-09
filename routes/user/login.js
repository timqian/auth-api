// TODO: login use email or username

import { User }    from '../../models/User'; // get our mongoose model
import createToken from '../../utils/createToken';

export default function(req, res) {
  const { name, password } = req.body;

  // find the user
  User.findOne({ name }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({ success: false, message: 'Login failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != password) {
        res.json({ success: false, message: 'Login failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token

        const payload = { name: user.name };
        const token = createToken(payload);

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
  });
}
