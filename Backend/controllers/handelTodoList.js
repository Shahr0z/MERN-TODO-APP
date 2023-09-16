const todoModel = require('../model/todo');

const handelTodoList = async (req, res) => {
    try {
        const todoList = await todoModel.find({}).sort({ 'createdAt': -1 });
        return res.status(200).json(todoList);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = handelTodoList;