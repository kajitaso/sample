import  { connect }  from 'react-redux'
import { setPages, incPages, decPages, maxPages, minPages } from '../actions/index';
import pageLink from '../components/pageLink'
import { Dispatch } from 'redux';
import { IState } from '../commons/interfaces';

const mapStateToProps = (state: IState, ownProps: any) => {
  console.log(ownProps.page);
  console.log(state);
  console.log('ページ一致したかどうか',state.jobInfo.length);
  //最後のページのときfalse
  return {
    active: ownProps.page === state.pages ? false : true
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => {
  console.log('ownProps dispatch:', ownProps);
  return {
    setLastPage: () => {
      dispatch(setPages(ownProps.page))
    }
  }
}

const pageLinks = connect(
  mapStateToProps,
  mapDispatchToProps
)(pageLink)

export default pageLinks