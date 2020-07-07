import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

//components　にたいして action を紐づける
const AddTodo = ({ dispatch }) => {
  //inputelement ref で放り込む
  let input: any;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          //アクションでstate変更
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)