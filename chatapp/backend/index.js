import { createServer } from "http";
import dotenv from "dotenv";
import cors from "cors";
import express from "express"; // corrected import statement
import { Server } from "socket.io";
dotenv.config();
const app = express();
app.use(cors());
const server = createServer(app);
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true
    }
} )

app.get('/',(req,res)=>{
    console.log("hello world")
})

io.on("connection",(socket)=>{
    console.log("Connection established",socket.id)
    socket.on("message",(data)=>{
        console.log("message is",data.message)
    socket.to(data.room).emit("recive-message",data.message)
    })
   socket.on("disconnect",()=>{
    console.log("disconnected",socket.id)
   })
    })

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
