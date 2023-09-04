const {User} = require("../models")


  const findProfile = async (req,res,next) => {
    console.log("Find single user by pk in db")
    const id = req.user.id;
    req.user = await User.findByPk(id)
  console.log(req.user);
    next()
}


module.exports = {findProfile}