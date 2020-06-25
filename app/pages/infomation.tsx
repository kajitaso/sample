import React, { useState, useCallback } from 'react';

//外部コンポーネント読み込み
import JumboTron from '../components/JumboTron';
import NavBar from '../components/NavBar';

const Infomation: React.FC = () => {
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
        <JumboTron title="各種情報" lead="このページは情報コーナーです" />
        <div className="container">
          <div>{ count }</div>
          <div>
            <button onClick={ handleIncrement }> +1 </button>
            <button onClick={ handleDecrement }> -1 </button>
          </div>
        </div>
      </div>
    )
}

export default Infomation