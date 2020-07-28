import  { connect }  from 'react-redux'
import { setPages, incPages, decPages, maxPages, minPages } from '../actions/index';
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

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => {
  console.log('ownProps dispatch:', ownProps);
  return {
    setFirstPage: (firstpage: number) => {
      dispatch(minPages(firstpage))
    },
    setLastPage: (lastPage: number) => {
      dispatch(maxPages(lastPage))
    },
    setIncrementPage: (currentPage: number) => {
      dispatch(incPages(currentPage))
    },
    setDecrementPage: (currentPage: number) => {
      dispatch(decPages(currentPage))
    }
  }
}

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(pageContainer)

export default PageContainer