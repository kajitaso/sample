import React, { useState, useCallback } from 'react';

//外部コンポーネント読み込み
import { TextConsts } from '../consts'

import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer'
import PageContainer from '../containers/pageContainers'
import JobInfoContainer from '../containers/jobInfoContainer'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodoList'

const Careers: React.FC = () => {

  return (
    <div className="App">
      <NavBar />
      <JumboTron title="職務経歴" lead="このページはReact, Redux, Typescriptで構成されています。" />
      <div className="container">
        <PageContainer />
        <JobInfoContainer />
        <PageContainer />
      </div>
      <Footer text={TextConsts.FOOTER_TEXT.text}/>
    </div>
  )
}

export default Careers