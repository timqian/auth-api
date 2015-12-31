Working on it

as a starter see the starter branch: https://github.com/timqian/auth-api/tree/jwtAuth-RESTful-server-starter-2.0


## Sample usage:

`npm install auth-api express body-parser morgan --save`

```
import authApi        from 'auth-api';
import express        from 'express';
import bodyParser     from 'body-parser';
import morgan         from 'morgan';
import mongoose       from 'mongoose';
import sampleConfig   from './sampleConfig';

mongoose.connect('mongodb://localhost/database'); // connect to database

authApi.init(sampleConfig);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', authApi.authRouter);

app.listen(3000);
console.log('API magic happens at http://localhost:3000');

```
