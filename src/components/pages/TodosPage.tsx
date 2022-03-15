import React, {FC, useEffect, useState} from 'react';

import {ITodo} from '../interface';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';


const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    })

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
        }
        setTodos(state => [newTodo, ...state]);
    }

    const toggleHandler = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        if (window.confirm('Вы уверены что хотите удлаить элемент?')) {
            setTodos(state => state.filter(todo => todo.id !== id))
        }
    }

    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </>
    );
};

export default TodosPage;