import React, { useState, useCallback } from 'react';

//外部コンポーネント読み込み
import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';

const Question: React.FC = () => {
    return (
      <div className="App">
        <NavBar />
        <JumboTron title="よくある質問" lead="面談等での良くある質問をvueでまとめました。" />
      </div>
    )
}

export default Question