const mongoose = require("mongoose");

const schema = mongoose.Schema({
    full_name: String,
    email: String,
    number: String,
    city: String,
    url: String
  });

const UserModel=mongoose.model('user', schema);

module.exports={
    UserModel
}