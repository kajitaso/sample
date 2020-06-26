import React from 'react'
import TaskItem from './TaskItem'

type Task = {
    id: number,
    title: string,
    done: boolean
}

type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {

    const handleDone = (task: Task) => {
        setTasks(prev => prev.map(item => 
            item.id === task.id
                ? {...task, done: !task.done}
                : item
        ))
    }

    const handleDelete = (task: Task) => {
        setTasks(prev => prev.filter( item => 
            item.id !== task.id
            ))
    }

    return (
        <div className="container">
        <h2>登録されているタスク</h2>
        {
            tasks.length <= 0 ? '登録されたTODOはありません。' :
            <ul className="list-group">
            { tasks.map( task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                    handleDone={handleDone}
                />
            )) }
            </ul>
        }
        </div>        
    )
}

 
export default TaskList