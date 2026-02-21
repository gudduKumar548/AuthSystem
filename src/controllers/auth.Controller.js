const signupModel = require('../models/signup.model');
const bcrypt = require('bcrypt');

async function handleSignup(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const checkUser = await signupModel.findOne({ email });
        if (checkUser) {
            return res.status(409).json({ message: "user already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await signupModel.create({
            firstName, lastName, email, password: hashedPassword
        });
        return res.status(201).json({
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }
        });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}

module.exports = { handleSignup };