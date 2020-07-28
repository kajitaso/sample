import  { connect }  from 'react-redux'
import { setJobInfoStatus } from '../actions/index';
import JoInfoContainer from '../components/JobInfoContainer'
import { Dispatch } from 'redux';
import { IState } from '../commons/interfaces';
let period: number = 0;
let year: number = 0;
let month: number = 0;


const mapStateToProps = (state: IState, ownProps: any) => {
  console.log(ownProps.page);
  console.log(state);
  console.log('ページの状態',state.jobInfoStatus);
  //初期化
  period = 0;
  state.jobInfo.forEach( (job) => {
      console.log(period)
      console.log(job.period)
      period += job.period
    } )
  year = Math.floor(period / 12)
  month = period % 12
  //現在のページと一致したときアクティブ
  return {
    page: state.pages,
    status: state.jobInfoStatus,
    jobInfo: state.jobInfo,
    totalPeriod: period,
    year: year,
    month: month
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => {
  console.log('ownProps dispatch:', ownProps);
  return {
    setJobStatus: (status: string) => {
      dispatch(setJobInfoStatus(status))
    }
  }
}

const JoInfoContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoInfoContainer)

export default JoInfoContainers