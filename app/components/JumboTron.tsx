import React from 'react';

type Props = {
    title: string
    lead: string
  }

const JumboTron: React.FC<Props> = ({ title, lead }) => {
    return (
        <div className="jumbotron my-3">
            <h1 className="display-4">{ title }</h1>
            <p className="lead">{ lead }</p>
        </div>
    )
  }

export default JumboTron