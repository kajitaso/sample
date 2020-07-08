import React ,{ useState }from 'react';
import FrontendChart from './FrontendChart'
import { TextConsts } from '../consts'

type Props = {
    bgColor: string
    fadeIn: boolean
    dataChart: any
  }

type Style = {
    [s: string]: string
}

const Article: React.FC<Props> = ({ bgColor, fadeIn }) => {
    const styleContainer : Style = { "backgroundColor" :  bgColor } ;
    const addClass: string = fadeIn ? "fadein" : ""
    const [number, setNumber] = useState(0);
    const listStyle = {
        backgroundColor: 'white',
        color: '#7ad5de',
        padding: '10px',
        border: '2px solid #ddd',
        cursor: 'pointer',
        borderRadius: '0.3rem'
    }
    const listStyleActive = {
        backgroundColor: '#7ad5de',
        color: 'white',
        padding: '10px',
        border: '2px solid #ddd',
        cursor: 'pointer',
        borderRadius: '0.3rem'
    }
    return (
    <div className={`container mt-0 pb-3 mb-5 ${addClass}`} style={ styleContainer }>
        <h2 className="text-center pt-3">
            { TextConsts.ARTICLE_SKILL[number].title}
        </h2>
        <ul style={{listStyle: 'none', display: 'flex', }}>
            <li style={number === 0 ? listStyleActive : listStyle} key={0} onClick={()=>setNumber(0)}>FrontEnd</li>
            <li style={number === 1 ? listStyleActive : listStyle} key={1} onClick={()=>setNumber(1)}>BackEnd</li>
            <li style={number === 2 ? listStyleActive : listStyle} key={2} onClick={()=>setNumber(2)}>others</li>
        </ul>
        <p className="text-center pt-5 pb-5">
            { TextConsts.ARTICLE_SKILL[number].text }
        </p>
        <FrontendChart dataRadar={TextConsts.ARTICLE_SKILL[number].chartData}/>
    </div>
    )
  }

export default Article