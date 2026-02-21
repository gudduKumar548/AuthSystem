require('dotenv').config();
const signupModel = require('../models/signup.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function handleUserLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await signupModel.findOne({ email});
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign(
            { id: user._id, },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );
        res.cookie('token', token);
        return res.status(200).json({ message: "logged-in successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = { handleUserLogin,};