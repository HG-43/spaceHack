//we can use this too but we will have to make chane in our package.json --> we will have to add "type":"module"
const  express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const authRouter = require("./routes/authRoute")
dotenv.config(); 

const app = express();
 
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
  
app.use("/auth", authRouter);
const uri = process.env.URI;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(()=>{
        const port = process.env.PORT;
        app.listen(port, ( )=>{
            console.log(`server is running on port:- ${port}`);
        })
    })
    .catch((err)=>{
        console.log(err);
    })

    //password == WFdRgL9LFPZqUUAo
