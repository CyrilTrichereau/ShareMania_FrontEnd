const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log(
      " -------------------------" +
        " je verifie l'auth : " +
        " -------------------------"
    );
    console.log({reqheadersauthorization: req.headers.authorization});
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "(process.env.JWT_KEY)");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      console.log(" ---------------- authentified ----------------");
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
