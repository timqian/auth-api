import User from '../../models/User';

// set email verified
export default async function(req, res) {
  const { name } = req.decoded;

  const user = await User.findOne({ name });

  user.verified = true;

  await user.save();

  res.json({
    success: true,
    message: 'Congratulations! your email account is now verified'
  });

}
