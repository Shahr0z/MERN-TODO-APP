const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;