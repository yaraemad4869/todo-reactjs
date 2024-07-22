import { useState } from "react"

export default function Todo({ todoList, Delete }) {
    const [todo, setTodo] = useState(todoList)
    const [b, setB] = useState(false)
    return (
        <div key={todo.id} className="todo">
            <button onClick={() => {
                Delete(todo.id)
            }}>delete</button>
            <button onClick={() => setB(!b)}>edit</button>
            <div className={"flex " + (b ? "stretch" : "baseline")}>
                {!b && <input className="margin-10" type="checkbox" checked={todo.completed} name="completed" id={todo.id} onClick={() => {
                    setTodo(previousState => {
                        return { ...previousState, completed: !todo.completed }

                    })
                }
                } />}{!b && <label htmlFor={todo.id}><h2 style={{ textDecoration: (todo.completed ? "line-through" : null) }}>{todo.title}</h2></label>}

                {b && <input type="text" id={"input" + todo.id} />}
                {b && <button onClick={() => {
                    setB(!b)
                    setTodo(previousState => {
                        return { ...previousState, title: document.querySelector(("#input" + todo.id)).value }

                    })
                    // setTodo({...todo}, todo.title = document.querySelector("input").value)
                }}>Submit</button>}
            </div>

        </div >
    )
}