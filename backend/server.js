const Razorpay = require("razorpay");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const User = require("./models/User");

const Product = require("./models/Product");

const app = express();




app.use(cors());

app.use(express.json());

const razorpay = new Razorpay({

  key_id:"rzp_test_SmkZ9rweUuXxq3",

  key_secret:"YOUR_SECRET_KEY"

});



// Home Route
app.get("/", (req, res) => {

  res.send("API Running");

});


// REGISTER API
app.post("/register", async(req,res)=>{

  try{

    console.log(req.body);

    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if(existingUser){

      return res.json({
        message:"User Already Exists"
      });

    }

    // Save user
    const user = new User({

      name,
      email,
      password

    });

    await user.save();

    res.json({
      message:"User Registered"
    });

  }

  catch(error){

    console.log(error);

    res.status(500).json({
      message:"Register Failed"
    });

  }

});


// LOGIN API
app.post("/login", async(req,res)=>{

  try{

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user){

      return res.json({
        message:"User Not Found"
      });

    }

    if(user.password !== password){

      return res.json({
        message:"Invalid Password"
      });

    }

    const token = jwt.sign(

      { id:user._id },

      "aksSecretKey"

    );

    res.json({

      token,

      message:"Login Success"

    });

  }

  catch(error){

    console.log(error);

    res.status(500).json({
      message:"Login Failed"
    });

  }

});


// ADD PRODUCT API
app.post("/add-product", async (req, res) => {

  try {

    const product = new Product(req.body);

    await product.save();

    res.json({
      message: "Product Added"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error adding product"
    });

  }

});


// GET PRODUCTS API
app.get("/products", async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error fetching products"
    });

  }

});

app.post("/create-order", async(req,res)=>{

  try{

    const options = {

      amount:req.body.amount * 100,

      currency:"INR"

    };

    const order = await razorpay.orders.create(
      options
    );

    res.json(order);

  }

  catch(error){

    console.log(error);

    res.status(500).json({
      message:"Order Failed"
    });

  }

});



// MongoDB Connection
mongoose.connect(
  "mongodb+srv://abisheela77_db_user:abi123@cluster0.e1bhxhw.mongodb.net/clothingDB?retryWrites=true&w=majority"
)
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err));


// Server
app.listen(5000, () => {

  console.log("Server Running");

});