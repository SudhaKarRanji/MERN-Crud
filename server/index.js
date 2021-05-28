const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');


// use to creat app usage
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/crud',{ useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true  },
err =>{
    if(!err)
    console.log('Database Connected')
    else
    console.log('Error in connecting Database:'+err)
})

app.use(cors());
app.use(express.json());

//use routing
const user = require('./routes/user');
app.use('/user', user);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});