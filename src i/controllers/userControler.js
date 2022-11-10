const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')

const createUser = async function(req,res){
   try{ 
   let createdUser = await userModel.create(req.body)
  
   res.send(createdUser)
   }catch(error){
      res.status(500).send({ msg: error.message })
   }
}

const loginUser = async function (req, res) {

  try {
      let {email,password} = req.body
      
      let user = await userModel.findOne({ $and:[{email: email}, {password: password }]});
      if (!user)
          return res.status(401).send({
              status: false,
              msg: "email or the password is not correct",
          });
      let token = jwt.sign(
          {
              authorId: user._id.toString(),
          },
          "userLogin"
      );
      return res.status(200).send({ status: true, data: {token: token} });
  }
  catch (error) {
      res.status(500).send({ msg: error.message })
  }
}

module.exports.createUser = createUser
module.exports.loginUser = loginUser