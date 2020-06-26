import React, { useState, useCallback } from 'react';

//外部コンポーネント読み込み
import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';

const News: React.FC = () => {
    const [ count, setCount ] = useState<number>(0)
  
    const handleIncrement = useCallback(() => {
      setCount(prev => prev + 1)
    }, []);
  
    const handleDecrement = useCallback(() => {
      setCount(prev => prev - 1)
    }, []);
  
    return (
      <div className="App">
        <NavBar />
        <JumboTron title="お知らせの編集" lead="このページはお知らせです" />
        <div className="container">
            <div>
                <h2>お知らせ一覧</h2>
            </div>
            <div>
                <h2>お知らせ登録</h2>
            </div>
            <div>
                <h2>お知らせ削除</h2>
            </div>
        </div>
      </div>
    )
}

export default News