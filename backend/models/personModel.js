const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
    },
    bithDate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});
