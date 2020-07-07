const todos = (state: any[] | never = [], action) => {
    //stateに対する処理を書く
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map((todo: any) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  export default todos;