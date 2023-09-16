const todoModel = require('../model/todo');

const handleTodos = async (request, response) => {
    try {
        const newTodo = await todoModel.create({
            data: request.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();

        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

module.exports = handleTodos;