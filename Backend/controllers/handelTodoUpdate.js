const todoModel = require('../model/todo');

const handelTodoUpdate = async (req, res) => {
    try {
        await todoModel.findByIdAndUpdate(
            { _id: req.params.id },
            { data: req.body.data },
        );

        const updateTodo = await todoModel.findById(req.params.id);
        return res.status(200).json(updateTodo);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = handelTodoUpdate;