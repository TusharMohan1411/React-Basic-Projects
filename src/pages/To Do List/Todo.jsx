import { useRef, useState } from "react"
import TodoItem from "./TodoItem";
import './todo.css';

export default function Todo() {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState({
        title: '',
        description: '',
    });

    const titleRef = useRef();

    function handleChange(e) {
        const { name, value } = e.target;
        setNewTodo(prevTodo => ({
            ...prevTodo,
            [name]: value
        }
        ));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (newTodo.title.trim() !== '' && newTodo.description.trim() !== '') {
            const newTodoItem = {
                id: Math.random(),
                title: newTodo.title,
                description: newTodo.description,
                // completed: false
            }

            setTodos([...todos, newTodoItem]);
            setNewTodo({
                title: '',
                description: ''
            });
            titleRef.current.focus();
        }
    }

    function deleteTask(id) {
        setTodos(prevState => (
            prevState.filter(todo => todo.id !== id)
        ))
    }


    return (
        <div className="todo-app">
            <h1>To Do List App React</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newTodo.title}
                    onChange={handleChange}
                    ref={titleRef}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={newTodo.description}
                    onChange={handleChange}
                />
                <button type="submit">Add Task</button>
            </form>
            <div id="todos-cont">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} handleDelete={deleteTask} />
                ))}
            </div>
        </div>
    );
}