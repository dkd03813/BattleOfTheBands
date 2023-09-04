const jwt = require("jsonwebtoken");
// Authentification for log in, to give them a token or not and have access to webpage
const authCheck = (req,res, next) => {
    const token = req.cookies.token;
//Verify JWT
// If JWT is valid, then next
// if not then show error
console.log('Auth check middleware has fired', token)
let decoded = null
try {
    decoded = jwt.verify(token,"superSecretPrivateKey")
    console.log(decoded)
} catch (error) {
    console.log(error)
}
    if (decoded) {
        
        //If the user is decoded (user is in the database), then save the id of that user so that they can access stuff on the site
        req.user = {id:decoded.foo}
        next()
    } else {
        res.render("login" , {title: "You must login to view your account"})
    }
}
module.exports = {
    authCheck
}