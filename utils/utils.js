const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const key="Secretkey"
const passwordCompare = async (dbPassword, enteredPassword) => {
    try {
        return await bcrypt.compare(enteredPassword, dbPassword);
    } catch (error) {
        return false;
    }

}


const jwtGen = async (userdata) => {
    try {
        var token = await jwt.sign(userdata , key);

        return token;
    } catch (error) {
        return false;
    }

}

module.exports = {
    passwordCompare,
    jwtGen
}