const path = require('path');
const express = require ('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathutil");

//add home middleware get data
hostRouter.get("/add-home",(req,res,next)=>{
  res.render('addhome', {pageTitle : "Add Home to Airbnb" , currentPage : 'addHome'});
});

const registeredHomes = [];

//add home middleware post data handling
hostRouter.post("/add-home",(req,res,next)=>{
  console.log("Home registered succesfully for :" , req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded', {pageTitle : "Home Added Successfully" , currentPage : 'homeAdded'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;

