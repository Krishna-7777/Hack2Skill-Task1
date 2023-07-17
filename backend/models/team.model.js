const mongoose = require("mongoose");

const schema = mongoose.Schema({
    full_name: String,
    email: String,
    team_name: String
  });

const TeamModel=mongoose.model('user',schema);

module.exports={
    TeamModel
}