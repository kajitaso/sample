import { TextConsts } from '../consts'

const jobInfo = (state = TextConsts.JOB_INFO, action) => {
    switch (action.type) {
      //DBから取得想定のため操作しない
      default:
          return state
    }
  }
  
  export default jobInfo