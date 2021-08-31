const jwt = require('jsonwebtoken');

// Exported functions
module.exports = {
    generateTokenForUser: (userData) => {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        }, '(process.env.JWT_KEY)', 
        {
            expiresIn: '48h'
        })
    },
    parseAuthorization: (authorization) => {
      return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },
    getUserId: (authorization) => {
      let userId = -1;
      const token = module.exports.parseAuthorization(authorization);
      if(token != null) {
        try {
          const jwtToken = jwt.verify(token, '(process.env.JWT_KEY)');
          if(jwtToken != null)
            userId = jwtToken.userId;
        } catch(err) { }
      }
      return userId;
    }
}