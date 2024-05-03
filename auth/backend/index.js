const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const router=require("./routes/routes")
dotenv.config()
const app=express()
const cors=require("cors")
const cookieParser = require("cookie-parser")
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(router)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is Online");
    app.listen(process.env.PORT, () => {
      console.log("Server is started at port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

 app.get("/set-cookie",(req,res)=>{
  res.cookie('newUser',false)
  res.send("cookie created")
 }) 
 
 app.get('/read-cookies', (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
  });