const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

// mongodb connected
mongoose.connect('mongodb://127.0.0.1:27017/Sample4', {useNewUrlParser: true, useUnifiedTopology: true} ).then(
    () =>{
        console.log('Connected to mongodb');
    }
).catch((err) => {
    console.log(err);
})



// product Schema
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
})

// Product model
const Product = new mongoose.model("Product" , productSchema);

//create product
app.post('/api/v1/product/new', async (req, res) =>{
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
    
})

// Product read 
app.get('/api/v1/products' , async(req, res) =>{
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
})


// product Update 
app.put('/api/v1/product/:id' , async(req, res) =>{

    let product = await Product.findById(req.params.id);

    product = await Product.findByIdAndUpdate(req.params.id , req.body,{
        new: true,
        useFindAndModify: false,
        runValidators:true

    })

    res.status(200).json({
        success:true,
        product
    })
})
app.delete('/api/v1/product/:id', async (req, res) => {
    const product = await Product.findOneAndDelete({ _id: req.params.id });
  
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product is NOT found",
      })
    }
  
    res.status(200).json({
      success: true,
      message: "Product is deleted successfully"
    });
  })
  

app.listen(4500 , ()=>{
    console.log('Server is working at http://localhost:4500/');

})