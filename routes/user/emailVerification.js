import User from '../../models/User';

// set email verified
export default function(req, res) {
  const { name } = req.decoded;

  User.findOne({ name }, (err, user) => {
    if (err) throw err;
    user.verified = true;
    user.save(function (err) {
      if (err) throw err;
      res.json({
        success: true,
        message: 'Congratulations! your email account is now verified'
      });
    });
  });
}
