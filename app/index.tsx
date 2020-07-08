import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import Entry from './Entry'

interface MyWindow extends Window {  
    devToolsExtension: any  
}  
declare var window: MyWindow;  

const store = createStore(
    rootReducer,
    compose(
        process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    )
export default store;

render(
  <Provider store={store}>
    <Entry />
  </Provider>,
  document.getElementById('react-route')
)