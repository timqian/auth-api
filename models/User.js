// get an instance of mongoose and mongoose.Schema
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// set up a mongoose model and export
export const User = mongoose.model('User', new Schema({
    name: String,
    password: String
}));
