require("dotenv").config();
const express =require("express");
const cors = require("cors");

const connectDB =require("./config/db");

const app = express();

const todo =require("./routers/todoRoutes");

// connect database
connectDB();

app.use(cors({origin:true , credentials: true}));

// initialize middleware
app.use(express.json());
app.get("/",(req,res)=>res.send("server is running"))

app.use("/todo",todo)

// setting  port
const PORT =process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server is running  on http://localhost:${PORT}`);
    
});