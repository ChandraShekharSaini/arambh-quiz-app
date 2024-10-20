import Users from '../models/user.js'
import bcrypt from 'bcryptjs'
import errorHandler from '../utils/error.js';



export const postSignup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(username , email , password);
  console.log("i am here inside", password);
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new Users({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getSignin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("i am here login", email);
  try {
    const validUser = await Users.findOne({ email });
    console.log(validUser._id);
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
   

    res.status(200).json(validUser);
  } catch (error) {
    next(error);
  }
};

