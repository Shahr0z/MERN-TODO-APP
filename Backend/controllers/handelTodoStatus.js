const todoModel = require('../model/todo');

const handelTodoStatus = async (req, res) => {
    try {
        const findTodo = await todoModel.findById(req.params.id);

        const updateTodo = await todoModel.findByIdAndUpdate(req.params.id, {
            status: !findTodo.status
        }, { new: true });

        return res.status(200).json(updateTodo);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = handelTodoStatus;