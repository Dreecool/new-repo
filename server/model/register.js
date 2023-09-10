
const mongoose = require("mongoose");


const RegisterSchema = new mongoose.Schema({

  full_name: {
    type: String,
    required: true
  },

  email_address: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  
})


const Reg = mongoose.model("Register", RegisterSchema);

module.exports = Reg