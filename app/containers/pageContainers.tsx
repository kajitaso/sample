import  { connect }  from 'react-redux'
import { setPages, incPages, decPages, clearPages } from '../actions/index';
import pageContainer from '../components/pageContainer'
import { Dispatch } from 'redux';
import { IState } from '../commons/interfaces';

const mapStateToProps = (state: IState, ownProps: any) => {
  console.log('ownProps state:', ownProps);
  //表示件数
  const DISPLAY_NUMBER = 5;
  let startNumber = state.pages -2 < 1 ? 1 : state.pages - 2;
  let endNumber = state.pages + 2 > state.jobInfo.length ? state.jobInfo.length : state.pages + 2;
  //5件は表示する
  if(startNumber === 1 && endNumber - startNumber < DISPLAY_NUMBER) {
    endNumber = startNumber + 4;
  }
  if(endNumber === state.jobInfo.length && endNumber - startNumber < DISPLAY_NUMBER) {
    startNumber = endNumber - 4;
  }
  return {
    jobInfo: state.jobInfo,
    pages: state.pages,
    startPage: startNumber,
    endPage: endNumber
  }
}

const PageContainer = connect(
  mapStateToProps
)(pageContainer)

export default PageContainer