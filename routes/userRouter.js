const path = require('path');
const express = require ('express');
const userRouter = express.Router();

const {registeredHomes} = require('./hostRouter') ;

userRouter.get("/",(req,res,next) =>{
  console.log(registeredHomes);
  res.render('home', { registeredHomes :registeredHomes , pageTitle: 'Home page' , currentPage : 'home'});
});

module.exports = userRouter;