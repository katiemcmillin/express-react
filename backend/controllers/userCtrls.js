const db = require("../models"); //this is where our db mongoose connection lives as well as our models
const bcrypt = require("bcrypt");

//USER CREATE ROUTE
const createUser = async (req, res) => {
  try {
    //overwrite the user password with the hashed password, then pass that in to our database
    req.body.password = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10)
    );
    // await db.User.create(req.body);
    //   console.log("user is created", createdUser);
    //   res.redirect("/");

    const { username, email, password } = req.body;
    // await Joi.validate({ username, email, password }, signUp);
    const newUser = new db.User({ username, email, password });
    // const sessionUser = sessionizeUser(newUser);
    const savedUser = await newUser.save();
    // req.session.user = sessionUser;
    res.send(savedUser);
  } catch (err) {
    res.status(400).send((err));
  }
};

module.exports = {
  createUser,
};
