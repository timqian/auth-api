import express from 'express';
import bodyParser  from 'body-parser';
import morgan      from 'morgan';
import mongoose    from 'mongoose';
import { DATABASE } from './config'; // get our config file
import user from './routes/user';
import profile from './routes/profile';

mongoose.connect(DATABASE); // connect to database

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/profile', profile);
app.use('/user', user);

const port = process.env.PORT || 8080; // used to create, sign, and verify tokens
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
