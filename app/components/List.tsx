import React from 'react';

type Props = {
    number: string
    children: React.ReactNode
  }

//子コンポ
const List: React.FC<Props> = ({ number, children }) => {
    return (
    <p>{ number } の { children }</p>
    )
  }

export default List