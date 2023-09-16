const todoModel = require('../model/todo');


const handelTodoDelete = async (req, res) => {
    try {
        const resTodo = await todoModel.findByIdAndDelete(req.params.id)
        return res.status(200).json(resTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = handelTodoDelete;