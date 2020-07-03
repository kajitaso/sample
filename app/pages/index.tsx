import React, { useState, useCallback } from 'react';

//定数読み込み
import { TextConsts } from '../consts'
//外部コンポーネント読み込み
import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import Article from '../components/Article';
import Footer from '../components/Footer';
import Table from '../components/Table';
import FrontendChart from '../components/FrontendChart';
import BackendChart from '../components/BackendChart';

const dataRadar = [
  { rank: '国語', value: 120 },
  { rank: '数学', value: 85 },
  { rank: '理科', value: 65 },
  { rank: '社会', value: 35 },
  { rank: '英語', value: 35 },
];

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
      <Article title={TextConsts.ARTICLE_FRONTEND.title} text={TextConsts.ARTICLE_FRONTEND.text} bgColor={TextConsts.ARTICLE_FRONTEND.bgColor} fadeIn={TextConsts.ARTICLE_FRONTEND.fadeIn} childComponent={<FrontendChart dataRadar={TextConsts.ARTICLE_FRONTEND.chartData} />} />
      <Article title={TextConsts.ARTICLE_BACKEND.title} text={TextConsts.ARTICLE_BACKEND.text} bgColor={TextConsts.ARTICLE_BACKEND.bgColor} fadeIn={TextConsts.ARTICLE_BACKEND.fadeIn} childComponent={<FrontendChart dataRadar={TextConsts.ARTICLE_BACKEND.chartData} />} />
      <Article title={TextConsts.ARTICLE_OTHER.title} text={TextConsts.ARTICLE_OTHER.text} bgColor={TextConsts.ARTICLE_OTHER.bgColor} fadeIn={TextConsts.ARTICLE_OTHER.fadeIn} childComponent={<FrontendChart dataRadar={TextConsts.ARTICLE_OTHER.chartData} />} />
      <div className="container mt-5 pb-3 mb-3 pt-3" style={{ backgroundColor: "ddeeff" }}>
        <h2>todo機能</h2>
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </div>
      <Footer text={TextConsts.FOOTER_TEXT.text} />
    </div>
  )
}

export default Index