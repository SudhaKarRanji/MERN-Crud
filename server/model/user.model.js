
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true,},
  age : { type: Number, required: true},
  gender: {type:String, required:true},
  phone :{type:Number, required:true}
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);