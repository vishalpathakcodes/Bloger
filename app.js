require('dotenv').config();
const express=require("express");
const path=require("path");
const app = express();
const mongoose=require("mongoose");
const PORT=process.env.PORT||8000;
const cookieParser=require("cookie-parser");
const Blog=require("./model/blog");

mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("MongoDb Connected");}).catch(err=>{console.log(err)});

const userRoute=require("./routes/user");
const blogRoute=require("./routes/blog");
const { checkforAuthenticationCookie } = require("./middlewares/authentication");
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.urlencoded({ extended:false}));
app.use(cookieParser());
app.use(checkforAuthenticationCookie('token'))
app.use(express.static( path.join(__dirname, './public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use("/user",userRoute);
app.use("/blog",blogRoute);
app.get("/",async(req, res) => {
    const allBlogs=await Blog.find({});
    res.render("home",{
        user:req.user,
        blogs:allBlogs,
    });
})

app.listen(PORT,()=>{console.log(`Server started on Port ${PORT}`);});