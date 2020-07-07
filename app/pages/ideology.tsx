import React, { useState, useCallback } from 'react';

//外部コンポーネント読み込み
import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';

import Footer from '../components/TodoFooterRedux'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodoList'

const Ideology: React.FC = () => {

  return (
    <div className="App">
      <NavBar />
      <JumboTron title="Reduxのチュートリアル" lead="このページはReact, Redux, Typescriptで構成されています。" />
      <div className="container">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  )
}

export default Ideology