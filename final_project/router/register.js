const { users, isValid } = require("./auth_users");

const register = (username, password, res) => {

     if (!username || !password) {
        return res.status(404).json({ message: "Unable to register user." });
    }

    if (isValid(username)) {
        return res.status(404).json({ message: "User already exists!" });
    }

    users.push({ username, password });

}

module.exports.register = register
