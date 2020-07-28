import React from 'react';

type Props = {
  title: string
  lead: string
}

const JumboTron: React.FC<Props> = ({ title, lead }) => {
  return (
    <div className="jumbotron mb-3" style={{ background: 'url(./../img/top-banner.jpg) center no-repeat', backgroundSize: 'cover', marginTop: '42px' }}>
      <div style={{ background: 'rgba(255,255,255,0.8)' , height: '100%', padding: '4rem 2rem'}}>
        <h1 className="display-4" style={{ color: 'rgb(8 178 195)', textShadow: '0px 0px 5px rgba(255,255,255,1)' }}>{title}</h1>
        <p className="lead text-right" style={{ color: 'rgb(8 178 195)', textShadow: '0px 0px 5px rgba(255,255,255,1)' }}>{lead}</p>
      </div>
    </div>
  )
}

export default JumboTron