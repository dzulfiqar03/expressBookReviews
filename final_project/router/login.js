const { authenticatedUser, jwt } = require("./auth_users");

const login = (username, password, req, res) => {


  if (!username || !password) {
    return res.status(404).json({ message: "Unable to register user." });
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign({ data: password }, 'access', { expiresIn: 60 * 60 });
    req.session.authorization = { accessToken, username };
    return res.status(200).send("User successfully logged in");
  } else {
    return res.status(208).json({ message: "Invalid Login. Check username and password" });
  }
};


module.exports.login = login
