const mongoose = require('mongoose');

const dotEnv = require('dotenv');

dotEnv.config();

const connectDB = () => {
    const MONGO_URI = `mongodb+srv://${process.env.db_UserName}:${process.env.db_Password}+@todo.cwepr8v.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
    });

    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
    });

    mongoose.connection.on('error', (err) => {
        console.log(`Error: ${err.message}`);
    });

};

module.exports = connectDB;