import { combineReducers } from 'redux';
import todos from './todo-reducer';
import jobInfo from './jobInfo';
import pages from './page-reducer';
import visibilityFilter from './visibilityFilter-reducer';
import jobInfoStatus from './jobInfoStatus';

//stateに対してそれぞれReducerを用意
export default combineReducers({
  todos,
  visibilityFilter,
  jobInfo,
  pages,
  jobInfoStatus
})