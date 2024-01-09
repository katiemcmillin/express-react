///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
const { PORT } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");



//import all available routes in our /routes/index.js the user can use
const routes = require("./routes/index");
const { applyDefaults } = require("./models/People");

///////////////////////////////
// MiddleWare
////////////////////////////////
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
  }

app.use(cors(corsOptions)); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse json bodies
app.use(
  session({
    // where to store the sessions in mongodb
    name: process.env.SESS_NAME,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL, collection: 'session' }),
    // secret key is used to sign every cookie to say its is valid
    secret: process.env.TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
    // configure the experation of the cookie
    cookie: {
    httpOnly: false,
    sameSite: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
    },
  })
);

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.use("/", routes); //check the routes index.js for ALL routes so we save space on server.js

//catch all 404 route!
app.use((req, res) => {
  res.status(404).json({ message: "NOT A PROPER ROUTE" });
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
