const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name is required
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['student', 'admin'] },
    age: { type: Number }, // Age is optional
});

module.exports = mongoose.model('User', userSchema);
