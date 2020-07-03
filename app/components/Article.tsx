import React from 'react';

type Props = {
    title: string
    text: string
    bgColor: string
    fadeIn: boolean
    childComponent?: React.ReactNode
  }

type Style = {
    [s: string]: string
}

const Article: React.FC<Props> = ({ title, text , bgColor, fadeIn ,childComponent}) => {
    const styleContainer : Style = { "backgroundColor" :  bgColor } ;
    const addClass: string = fadeIn ? "fadein" : ""
    return (
    <div className={`container mt-0 pb-3 mb-5 ${addClass}`} style={ styleContainer }>
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