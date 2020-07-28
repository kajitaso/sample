import { JobInfoStatus } from '../actions'

const jobInfoStatus = (state = JobInfoStatus.MATTER, action) => {
    switch (action.type) {
        case 'SET_JOBINFO_STATUS':
            return action.status
      default:
            return state
    }
  }
  
  export default jobInfoStatus