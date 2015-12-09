import { User }    from '../../models/User';

export default function(req, res) {
  const { name, password } = req.body;

  console.log(name);

  User.findOne({ name }, (err, user) => {
    if (err) throw err;
    if (!user) {

      // send email

      new User({ name, password, }).save((err) => {
        if (err) throw err;
        console.log('____User saved successfully');
        res.json({ success: true });
      });

    } else {
      console.log('____User not saved, name has been taken');
      res.json({ success: false, message: 'Name has been taken', });
    }
  })
}
