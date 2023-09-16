import React, { useState } from 'react'
import { TODOS_URL } from '../api'
import { fetchTodos } from './TodoList'

const TextInput = () => {
    const [textInput, setTextInput] = useState('')

    // stop the page from refreshing when the form is submitted
    const getValue = (event) => {
        console.log(event.target.value)
        setTextInput(event.target.value)
    }

    //Call Api to post data
    const postTodo = async () => {
        try {
            const response = await fetch(TODOS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: textInput,
                }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    //On submit form
    const onFormSubmit = (event) => {
        event.preventDefault()
        postTodo()
        setTextInput('')
        fetchTodos()
        console.log('Form submitted!')
    }

    return (
        <form className='form' onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Enter new task ..."
                className='textInput'
                onChange={getValue}
                value={textInput}
            />
        </form>
    )
}

export default TextInput