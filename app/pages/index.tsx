import React ,{ useState, useCallback } from 'react';

//外部コンポーネント読み込み
import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';

const Index: React.FC = () => {
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
        <JumboTron title="トップページ" lead="React,Typescriptの練習" />
        <div className="container">
          <h2>クリックでstate変化</h2>
          <div>{ count }</div>
          <div>
            <button onClick={ handleIncrement }> +1 </button>
            <button onClick={ handleDecrement }> -1 </button>
          </div>
        </div>
      </div>
    )
}

export default Index