const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String,
    department: String,
    age: Number
});

module.exports = mongoose.model("students", StudentSchema);