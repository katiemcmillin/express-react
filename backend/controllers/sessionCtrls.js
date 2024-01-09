const db = require("../models"); //this is where our db mongoose connection lives as well as our models
const bcrypt = require("bcrypt");
require("dotenv").config();
const { sessionizeUser } = require("../util/helpers");

//CREATE SESSION
const createSession = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({ username: req.body.username });
    if (!foundUser) {
      // if found user is undefined/null not found etc
      res.send('<a  href="/">Sorry, no user found </a>');
    }
    // user is found yay!
    // now let's check if passwords match
    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      // add the user to our session
      const sessionUser = sessionizeUser(foundUser);
      req.session.user = sessionUser;
      // redirect back to our home page
      res.send(sessionUser);
    } else {
      // passwords do not match
      res.send('<a href="/"> password does not match </a>');
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

//DELETE SESSION
const deleteSession = (req, res, next) => {
  try {
    console.log(req.session.id)
    req.session.destroy((err) => {
      if (err) return next(err)
      // await db.collection("sessions").findOneAndDelete({id: req.session.id})
      res.clearCookie(process.env.SESS_NAME);
      res.status(200).send({Success: "logged out"});
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//GET SESSION
const getSession = async ({ user }, res) => {
  try {
    res.send({ user });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  createSession,
  deleteSession,
  getSession,
};
