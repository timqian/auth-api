import authApi        from './src/index';
import express        from 'express';
import bodyParser     from 'body-parser';
import methodOverride from 'method-override';
import morgan         from 'morgan';
import mongoose       from 'mongoose';
import sampleConfig   from './sampleConfig';

mongoose.connect('mongodb://localhost/database'); // connect to database

authApi.init(sampleConfig);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use('/', authApi.authRouter);


app.listen(3000);
console.log('API magic happens at http://localhost:3000');

// handle unhandled promise rejection
// https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on('unhandledRejection', function(reason, p) {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
    // application specific logging, throwing an error, or other logic here
});
