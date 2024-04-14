"use client"
import React, {useState} from 'react';
import {useStore} from "../helpers/use-store";
import {onEnterPress} from "../helpers/use-enter";

export const TodoNew = () => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        todoList.addTodo(newTodo);
        setTodo('');
    };

    return (
        <div className="flex w-full gap-2 items-center">
            <input type="text" value={newTodo} onKeyDown={onEnterPress(addTodo)} onChange={(e) => setTodo(e.target.value)} className="border border-black"/>
            <button onClick={addTodo} className="bg-black text-white">Add Todo</button>
        </div>
    )
};