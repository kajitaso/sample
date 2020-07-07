import { combineReducers } from 'redux';
import todos from './todo-reducer';
import visibilityFilter from './visibilityFilter-reducer';

//stateに対してそれぞれReducerを用意
export default combineReducers({
  todos,
  visibilityFilter
})