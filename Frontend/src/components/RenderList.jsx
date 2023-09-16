import { useState } from "react"
import { TODOS_DELETE, TODOS_UPDATE } from "../api"
import { updateStatus } from "./TodoList"

const RenderList = ({ todo }) => {

    const [editTodo, setEditTodo] = useState(false)
    const [editInput, setEditInput] = useState('')
    const [editId, setEditId] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault()
        putTodo(editId)
        setEditTodo(!editTodo)
    }

    // use put to update data
    const putTodo = async (id) => {
        try {
            const response = await fetch(TODOS_UPDATE + '/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: editInput,
                }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    //use delete to delete data
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(TODOS_DELETE + '/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <li className="todo-item" >
            <span style={{ display: editTodo ? 'none' : '' }}>{todo.data}</span>

            <form style={{ display: editTodo ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
                <input
                    type="text"
                    value={editInput}
                    className="edit-input"
                    onChange={(e) => setEditInput(e.target.value)}
                />
            </form>

            <span className="icon" onClick={() => deleteTodo(todo._id)} >
                <i className="fas fa-trash-alt"></i>
            </span>
            <span className="icon" onClick={() => setEditInput(todo.data) + setEditId(todo._id) + setEditTodo(!editTodo)}>
                {editTodo ? <i className="fas fa-check" onClick={() => putTodo(todo._id)}></i> : <i className="fas fa-edit"></i>}
            </span>

            <span onClick={() => updateStatus(todo._id)}>
                {todo.status === true ?
                    <div style={{ borderRadius: 2, backgroundColor: 'green', position: 'absolute', top: 0, left: 0, fontSize: 10, color: '#ffff', padding: 4 }} >
                        Active
                    </div>
                    : <div style={{ borderRadius: 2, backgroundColor: 'red', position: 'absolute', top: 0, left: 0, fontSize: 10, color: '#ffff', padding: 4 }} >
                        Completed
                    </div>
                }
            </span>
        </li>
    )
}

export default RenderList