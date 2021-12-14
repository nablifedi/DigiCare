const mongoose = require("mongoose")

const PersonSchema = mongoose.Schema({
    CIN: {
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
    birthDate: {
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
})