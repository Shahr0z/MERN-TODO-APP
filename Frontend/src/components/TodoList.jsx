import React, { useEffect, useState } from 'react'
import { TODOS_LIST_URL, TODOS_STATUS_URL } from '../api'
import RenderList from './RenderList'

const TodoList = () => {

    const [todos, setTodos] = useState([])

    //using useEffect to fetch data from api
    useEffect(() => {
        const fetchApi = async () => {
            const todosFromServer = await fetchTodos()
            setTodos(todosFromServer)
        }
        fetchApi()
    }, [todos])

    return (
        <article>
            <ul>
                {todos?.map((todo) => (
                    <RenderList key={todo._id} todo={todo} />
                ))}
            </ul>
        </article>
    )
}

export default TodoList

export const fetchTodos = async () => {
    try {
        const response = await fetch(TODOS_LIST_URL)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateStatus = async (id) => {
    try {
        const response = await fetch(TODOS_STATUS_URL + '/' + id, {
            method: 'GET',
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