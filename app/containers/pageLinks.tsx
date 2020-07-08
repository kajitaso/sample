import  { connect }  from 'react-redux'
import { setPages, incPages, decPages, clearPages } from '../actions/index';
import pageLink from '../components/pageLink'
import { Dispatch } from 'redux';
import { IState } from '../commons/interfaces';

const mapStateToProps = (state: IState, ownProps: any) => {
  console.log(ownProps.page);
  console.log(state);
  console.log('ページ一致したかどうか',ownProps.page === state.pages);
  //現在のページと一致したときアクティブ
  return {
    active: ownProps.page === state.pages
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => {
  console.log('ownProps dispatch:', ownProps);
  return {
    onClick: () => {
      dispatch(setPages(ownProps.page))
    }
  }
}

const pageLinks = connect(
  mapStateToProps,
  mapDispatchToProps
)(pageLink)

export default pageLinks