import express from 'express';
import bodyParser  from 'body-parser';
import morgan      from 'morgan';
import mongoose    from 'mongoose';
import { DATABASE } from './config'; // get our config file
import user from './routes/user';
import needingToken from './routes/needingToken';
import needingTokenAndVerified from './routes/needingTokenAndVerified';

mongoose.connect(DATABASE); // connect to database

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/user', user);

app.use('/needingToken', needingToken);
app.use('/needingTokenAndVerified', needingTokenAndVerified);

const port = process.env.PORT || 8080; // used to create,sign, and verify tokens
app.listen(port);
console.log('Magic happens at http://localhost:' + port);


// handle promise error
// https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on('unhandledRejection', function(reason, p) {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
    // application specific logging, throwing an error, or other logic here
});
