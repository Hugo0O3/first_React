import React from "react";

function Todolist() {
    return (
        <>
            <h1>My Todo App</h1>
            <form action="post">
                <input type="text" id="todo-input" name="todo" placeholder="Type a new todo" />
                <button type="submit">Add Todo</button>
            </form>
            <h2>Todos</h2>
            <input type="text" /><label for="learn">Learn React!</label>
            <input type="text" /><label for="awesome"> Be awesome!</label>
            <input type="text" /><label for="fun"> Have fun les pioupious 🐤!</label>
        </>
    )
}

export default Todolist