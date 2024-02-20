
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

var cors = require('cors')

app.use(cors())

const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');
const errorController = require('./controllers/error');


const ports = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/auth', authRoutes);
app.use('/order', orderRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

let nz_date_string = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

let date = new Date(nz_date_string);

console.log(date);

let curr_date = (date.getDate() + "." + date.getHours());


//mongodb code
const mongoose = require ("mongoose");
app.use(express.json());


//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/userReviews",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, (err)=>{
    if(!err){
        console.log("Successfully connected to the mongodb database!");
    }
    else{
        console.log(err);
    }
})

const schema = {
    id: Number,
    reviewerName: String,
    orderId: Number,
    rating: Number,
    title: String,
    suggestions: String,
    review: String
}

const monModel = mongoose.model("userReviews", schema);

//POST ROUTE
app.post('/post',async(req,res)=>{
    console.log("Inside Post");
    const data = new monModel({
        id: req.body.id ,
        reviewerName:req.body.reviewerName ,
        orderId: req.body.orderId,
        rating: req.body.rating ,
        title: req.body.title ,
        suggestions: req.body.suggestions ,
        review: req.body.review 
    });

    //saving the data in the collection
    const val = await data.save();
    res.json(val); 
})

//Fetching the data from the database
app.get('/fetch',function(req,res){
    // fetchid = req.params.id;
    console.log("Inside the get method");
    monModel.find(({req}),(err,val)=>{
        if(err){
            res.send("Error 404: Not found!")
        }
        else{
            if(val.length==0){
                res.send("Review does not exist!");
            }
            else{
                res.send(val);
            }
        }

    })
})







console.log(curr_date);
app.listen(ports, ()=> console.log(`Listening on Port ${ports}`));