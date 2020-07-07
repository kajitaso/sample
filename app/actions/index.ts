//初期値
let nextTodoId = 0

//reducerに送るデータを定義
export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (filter: string) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id: number) => ({
    type: 'TOGGLE_TODO',
    id
  })

//Todoのソート状態を定義するstateを3つ列挙
export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}