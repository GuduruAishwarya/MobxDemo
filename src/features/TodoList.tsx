"use client"
import React from 'react';
import {useStore} from "../helpers/use-store";
import {TodoItem} from "./TodoItem";
import {useObserver} from "mobx-react-lite";

export const TodoList = () => {
    const todoList = useStore();

    return useObserver(() => (
        <div className="border border-black">
            <div className="bg-red-200">
                <h1>Open Todos</h1>
                {todoList.openTodos.map(todo => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo}/>)}
            </div>
            <div className="bg-green-200">
                <h1>Finished Todos</h1>
                {todoList.finishedTodos.map(todo => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo}/>)}
            </div>
        </div>
    ));
};