import React, { useState } from 'react'

type Task = {
    id: number,
    title: string,
    done: boolean
}

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}

const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
    const [ inputTitle, setInputTitle ] = useState<string>('')
    const [ count, setCount ] = useState<number>(tasks.length + 1)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        setCount(count + 1)

        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false
        }

        setTasks([newTask, ...tasks])
        setInputTitle('')
    }

    return (
        <div>
            <div className="form-group">
                <div className="container">
                    <input
                        type="text"
                        placeholder="タスクを入力してください。"
                        className="form-control"
                        value={inputTitle}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit} className="btn btn-primary mt-3">追加</button>
                </div>
            </div>
        </div>        
    )
}
export default TaskInput