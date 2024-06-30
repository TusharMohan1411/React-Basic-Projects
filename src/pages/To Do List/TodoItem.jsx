import { useState } from 'react';
import './todoItem.css';

export default function TodoItem({ todo, handleDelete }) {

    const [completed, setCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    function handleCompleted() {
        setCompleted((completed) => !completed);
    }

    let completeClass = 'todo-item ';
    if (completed) {
        completeClass += 'completed';
    }

    function handleEdit() {
        setIsEditing((isEditing) => !isEditing)
    }

    return (
        <div className='todo-item-cont ' >
            <div className={completeClass}>
                <p id='status'> Status: {completed ? 'Completed' : 'Pending'}</p>
                <div id='todo-inputs'>
                    <input type="text" name="title" id='todo-title' defaultValue={todo.title} readOnly={!isEditing && true} />
                    <textarea name="description" id='todo-desc' readOnly={!isEditing && true}>{todo.description}</textarea>

                </div>

                <div className="todo-btns">
                    <button onClick={handleCompleted}>{completed ? <i class="fa-solid fa-rotate-left"></i> : <i class="fa-solid fa-check"></i>}</button>
                    <button id='editTask' onClick={handleEdit}>{!isEditing ? 'Edit' : 'Save'}</button>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            </div>
        </div >
    )

}