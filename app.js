const path = require('path');
const express = require ('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views' , 'views');


const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require("./utils/pathutil");

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});
app.use(express.urlencoded( {extended: false}));


app.use(userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir,'public')));


app.use((req,res,next)=>{
  res.status(404).render('404' , {pageTitle : 'page not found' , currentPage : '404'});
});






const PORT = 3000;
app.listen(PORT,() =>{
  console.log(`server running on address http://localhost:${PORT}`);
});