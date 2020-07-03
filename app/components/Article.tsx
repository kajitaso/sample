import React from 'react';

type Props = {
    title: string
    text: string
    bgColor: string
    childComponent?: React.ReactNode
  }

type Style = {
    [s: string]: string
}

const Article: React.FC<Props> = ({ title, text , bgColor, childComponent}) => {
    const styleContainer : Style = { "backgroundColor" :  bgColor } ;
    return (
    <div className="container mt-0 pb-3 mb-5" style={ styleContainer }>
        <h2 className="text-center pt-3">
            { title }
        </h2>
        <p className="text-center pt-5 pb-5">
            { text }
        </p>
        { childComponent &&
            childComponent
        }
    </div>
    )
  }

export default Article