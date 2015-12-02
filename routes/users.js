import express from 'express';
import { User }   from '../models/User'; // get our mongoose model
import jwt    from 'jsonwebtoken'; // used to create, sign, and verify tokens
import { SECRET } from '../config';
import verifyToken from '../utils/verifyToken';

const router = express.Router();

// TODO: 1. password 存之前加密(安全性)
router.post('/signup', (req, res) => {
  const { name, password } = req.body;

  console.log(name);

  // check unique and save user
  User.findOne({ name }, (err, user) => {
    if (err) throw err;
    if (!user) {
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
});

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/login', (req, res) => {
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
        const token = jwt.sign(payload, SECRET, {
          expiresIn: 24 * 60 * 60 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
  });
});

export default router;
