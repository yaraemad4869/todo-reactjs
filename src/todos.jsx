import { useCallback, useEffect, useState } from "react"
import Todo from "./todo"

export default function Todos() {
    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(todos.length)
    // const [b, setB] = useState(false)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(todos => {
                setTodos([...todos])
            })
    }, [])

    const Add = useCallback((todo) => {
        setTodos([todo, ...todos])
    })
    const Delete = useCallback((id) => {
        setTodos(todos.filter((todo) => todo.id != id))
    })
    // function Edit(id) {

    //     setTodos(todos.map((todo) => {
    //         if (todo.id == id) {
    //             return (
    //                 <>
    //                     {todo.title = input.value}
    //                 </>
    //             )
    //         }
    //     }))
    // }
    return (
        <>
            <div className="container">
                <input type="text" id="inputAdd" />
                <button onClick={() => {
                    setCount(count + 1)
                    Add({ id: count, userId: 555, title: document.getElementById("inputAdd").value, completed: false })
                }}>Add</button>
                {
                    todos.map(todo => {
                        return (
                            <Todo key={todo.id} todoList={todo} Delete={Delete} />
                            // <div key={todo.id}>
                            //     {/* <Todo todo={todo} CallBack={Delete} /> */}
                            //     <div className="todo">
                            //         <button onClick={() => {
                            //             Delete(todo.id)
                            //         }}>delete</button>
                            //         <button onClick={() => setB(!b)}>edit</button>
                            //         {!b && <h2>{todo.title}</h2>}
                            //         {b && <input type="text" />}
                            //         {b && <button onClick={() => { setTodo({ ...todo }, title = document.querySelector("input").value) }}>Submit</button>}
                            //     </div>
                            // </div>
                        )
                    })
                }
            </div>

        </>
    )
}