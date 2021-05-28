const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud',{ useNewUrlParser: true,useCreateIndex: true  },
err =>{
    if(!err)
    console.log('Database Connected')
    else
    console.log('Error in connecting Database:'+err)
})