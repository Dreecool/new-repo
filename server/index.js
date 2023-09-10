const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors');
const app = express()
const PORT = 3001

const Register = require("./model/register")

app.use(express.json());


app.use(cors(
  {
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
   
  }
));

mongoose.connect("mongodb+srv://francesdonaire:qepCBwN1ox6LgV32@mymongodb.ov5bhnp.mongodb.net/registerDb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
})


app.post("/RegisterUser", async (req, res) => {

  const full_name = req.body.full_name;
  const  email_address = req.body.email_address;
  const password = req.body.password;


  const user = new Register({

    full_name: full_name,
    email_address: email_address,
    password: password
   

  })

  try {

    await user.save();
   

  } catch (err) {

    console.log(err)
    
  }

})




app.post("/loginUser", async (req, res) => {

  const email_address = req.body.email_address;

  try {
    const existingUser = await Register.findOne({ email_address });

    if (existingUser) {
  
      res.status(200).json({ message: 'Login successful' }); 

    } else {

      res.status(401).json({ message: 'Invalid credentials' });

    }
    
  } catch (error) {

    console.log(error);
    res.status(500).json({ message: 'Login failed' }); 

  }
});





app.listen(PORT, () => {
  console.log("Port is listening 3001")
})