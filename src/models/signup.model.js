const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    }
});

const signupModel = mongoose.model('signup', signupSchema);

module.exports = signupModel;