const session = require('express-session');
const MongoStore = require('connect-mongo');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/library-project";

module.exports = app => {
    // required for the app when deployed to Heroku (in production)
    app.set('trust proxy', 1);

    app.use(
        session({
            secret: process.env.SESSION_SECRET || "super hyper secret key",
            resave: false,
            saveUninitialized: false,
            store: MongoStore.create({
                mongoUrl: MONGO_URI,
            }),
        })
    );
};