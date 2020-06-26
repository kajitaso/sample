import React ,{ useState, useCallback } from 'react';

//外部コンポーネント読み込み
import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';

type Task = {
  id: number,
  title: string,
  done: boolean
}

const initialState: Task[] = [
  {
    id: 2,
    title: '2つ目のタスク',
    done: false
  },
  {
    id: 1,
    title: '最初のタスク',
    done: false
  }
]

const Index: React.FC = () => {
    const [ count, setCount ] = useState<number>(0)
    const [ tasks, setTasks ] = useState(initialState)

    const handleIncrement = useCallback(() => {
      setCount(prev => prev + 1)
    }, []);
  
    const handleDecrement = useCallback(() => {
      setCount(prev => prev - 1)
    }, []);
  
    return (
      <div className="App">
        <NavBar />
        <JumboTron title="トップページ" lead="React,Typescriptの練習" />
        <div className="container">
          <h2>クリックでstate変化</h2>
          <div>{ count }</div>
          <div>
            <button onClick={ handleIncrement }> +1 </button>
            <button onClick={ handleDecrement }> -1 </button>
          </div>
        </div>
        <div className="container mt-5">
          <h2>todo機能</h2>
            <TaskInput setTasks={setTasks} tasks={tasks} />
            <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
      </div>
    )
}

export default Index