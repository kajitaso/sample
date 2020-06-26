import React from 'react';

type Task = {
    id: number,
    title: string,
    done: boolean
}

type Props = {
    task: Task,
    handleDone: (task: Task) => void
    handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete}) => {
    return (
    <li className={task.done ? 'done list-group-item' : 'list-group-item'}>
        <label>
            <input
                type="checkbox"
                className="checkbox"
                onClick={() => handleDone(task)}
                defaultChecked={task.done}
            />
            <span className="checkbox-label ml-3">{ task.title }</span>
        </label>
        <button
            onClick={() => handleDelete(task)}
            className="btn btn-danger ml-3"
        >削除</button>
    </li>        
    )
}

export default TaskItem