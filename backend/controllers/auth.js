const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.register = async (req, res, next)=> {
  const errors = validationResult(req);

  if(!errors.isEmpty()) 
    return;
  
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const password = req.body.password;

  console.log(name);

  try{
    const hashPassword = await bcrypt.hash(password,12);
    console.log(hashPassword);

    const UserDetails = {
      name: name,
      email: email,
      mobile: mobile,
      password: hashPassword
    };


    const result = await User.saveUser(UserDetails);


    res.status(201).json({message:'User register'});
  }
  catch (err){
    if(!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


exports.login = async (req, res, next)=> {

  const email = req.body.email;
  const password = req.body.password;

  try {
  const user = await User.findUser(email);
 

  if (user[0].length !== 1) {
    const error = new Error('A user with this email could not be found.');
    error.statusCode = 401;
    throw error;
  }

  const storedUser = user[0][0];
  console.log(storedUser);

  const isEqual = await bcrypt.compare(password, storedUser.uPassword);

    if (!isEqual) {
      const error = new Error('Wrong password!');
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        id: storedUser.uId,
        email: storedUser.uEmailId,
        name: storedUser.uName,
      },
      'secretfortoken',
      { expiresIn: '1h' }
    );
    res.status(200).json({ token: token, name: storedUser.uName, id : storedUser.uId });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};