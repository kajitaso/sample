import React from 'react';

type Props = {
    title: string
    lead: string
  }

const JumboTron: React.FC<Props> = ({ title, lead }) => {
    return (
        <div className="jumbotron mb-3" style={{ background: 'url(./../img/top-banner.jpg) center no-repeat', backgroundSize: 'cover', marginTop: '42px'}}>
            <h1 className="display-4" style={{ color: '#ffc107' , textShadow:'0px 0px 5px rgba(255,255,255,1)'}}>{ title }</h1>
            <p className="lead text-right" style={{ color: '#ffc107' , textShadow:'0px 0px 5px rgba(255,255,255,1)'}}>{ lead }</p>
        </div>
    )
  }

export default JumboTron