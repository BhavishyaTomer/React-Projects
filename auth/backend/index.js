const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const router=require("./routes/routes")
dotenv.config()
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
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
