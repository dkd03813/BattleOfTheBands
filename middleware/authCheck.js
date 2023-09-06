const jwt = require('jsonwebtoken');


const authCheck = (req, res, next) => {
    // Retrieve the token from the request headers
    const token = req.headers.authorization;

    console.log('Token in authCheck middleware:', token);
  
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    try {
      // Ensure that the token starts with "Bearer "
      if (!token.startsWith("Bearer ")) {
        throw new Error("Invalid token format");
      }
  
      // Remove the "Bearer " prefix
      const tokenWithoutPrefix = token.slice(7); // Removes "Bearer "
      
      const decoded = jwt.verify(tokenWithoutPrefix, "superSecretPrivateKey");
      req.user = { id: decoded.id };
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ error: "Unauthorized" });
    }
  };
  
  module.exports = {
    authCheck,
  };
  
