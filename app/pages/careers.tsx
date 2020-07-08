import React, { useState, useCallback } from 'react';

//外部コンポーネント読み込み
import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';

import Footer from '../components/TodoFooterRedux'
import PageContainer from '../containers/pageContainers'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodoList'

const Careers: React.FC = () => {

  return (
    <div className="App">
      <NavBar />
      <JumboTron title="職務経歴" lead="このページはReact, Redux, Typescriptで構成されています。" />
      <div className="container">
        <PageContainer />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  )
}

export default Careers