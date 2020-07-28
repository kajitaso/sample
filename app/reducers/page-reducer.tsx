const pages = (state = 1, action) => {
  switch (action.type) {
    case 'SET_PAGE_NUMBER':
        return action.pages
    case 'INC_PAGE_NUMBER':
        return action.pages
    case 'DEC_PAGE_NUMBER':
        return action.pages
    case 'MAX_PAGE_NUMBER':
        return action.pages
    case 'MIN_PAGE_NUMBER':
        return action.pages
    default:
        return state
  }
}

export default pages