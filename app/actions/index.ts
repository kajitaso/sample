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

//page番号操作
export const setPages = (page: number) => ({
  type: 'SET_PAGE_NUMBER',
  pages: page
})

export const incPages = (page: number) => ({
  type: 'INC_PAGE_NUMBER',
  pages: page > 0 ? page++ : page
})

export const decPages = (page: number) => ({
  type: 'DEC_PAGE_NUMBER',
  pages: page > 0 ? page-- : page
})

export const maxPages = (maxPage: number) => ({
  type: 'MAX_PAGE_NUMBER',
  pages: maxPage
})

export const minPages = (minPage: number) => ({
  type: 'MIN_PAGE_NUMBER',
  pages: minPage
})

export const setJobInfoStatus = (status: string) => ({
  type: 'SET_JOBINFO_STATUS',
  status
})

//Todoのソート状態を定義するstateを3つ列挙
export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}
//JOBINFO内の状態
export enum JobInfoStatus {
  MATTER = 'MATTER',
  SKILLS = 'SKILLS',
}