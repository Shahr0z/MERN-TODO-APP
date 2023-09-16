const express = require('express');
const handleTodos = require('../controllers/handleTodos');
const handelTodoList = require('../controllers/handelTodoList');
const handelTodoStatus = require('../controllers/handelTodoStatus');
const handelTodoUpdate = require('../controllers/handelTodoUpdate');
const handelTodoDelete = require('../controllers/handelTodoDelete');

const router = express.Router();

router.post('/todo', handleTodos);
router.get('/todolist', handelTodoList)
router.get('/todostatus/:id', handelTodoStatus)
router.put('/todoupdate/:id', handelTodoUpdate)
router.delete('/tododelete/:id', handelTodoDelete)

module.exports = router;