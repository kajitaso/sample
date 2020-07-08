import React, { useState, useCallback } from 'react';

//定数読み込み
import { TextConsts } from '../consts'
//外部コンポーネント読み込み
import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import Article from '../components/Article';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Table from '../components/Table';
import FrontendChart from '../components/FrontendChart';
import BackendChart from '../components/BackendChart';

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
  const [tasks, setTasks] = useState(initialState);

  return (
    <div className="App">
      <NavBar />
      <JumboTron title="kajitasoのポートフォリオサイト" lead="このページはReact,Typescriptで構成しています" />
      <Article title={TextConsts.ARTICLE_ABOUT.title} text={TextConsts.ARTICLE_ABOUT.text} bgColor={TextConsts.ARTICLE_ABOUT.bgColor} fadeIn={TextConsts.ARTICLE_ABOUT.fadeIn} />
      <Article title={TextConsts.ARTICLE_PROFILE.title} text={TextConsts.ARTICLE_PROFILE.text} bgColor={TextConsts.ARTICLE_PROFILE.bgColor} fadeIn={TextConsts.ARTICLE_PROFILE.fadeIn} childComponent={<Table items={TextConsts.PROFILE_DATA} />} />
      <Articles dataChart={TextConsts.ARTICLE_SKILL} bgColor={TextConsts.ARTICLE_SKILL[1].bgColor} fadeIn={TextConsts.ARTICLE_SKILL[1].fadeIn} />
      {/* <div className="container mt-5 pb-3 mb-3 pt-3" style={{ backgroundColor: "ddeeff" }}>
        <h2>todo機能</h2>
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </div> */}
      <Footer text={TextConsts.FOOTER_TEXT.text} />
    </div>
  )
}

export default Index