import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './redux'
export const store = createStore(
  reducers,
  // ! 异步操作存储state时候需要使用thunk, h和vue不同的是vue中异步操作卸载acton中就行，而redux中异步操作state是通过dispatch传入不同参数决定，函数代表异步操作，对象代表同步操作
  compose(
    applyMiddleware(...[thunk]), // ! 需要使用的中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //配置调试工具)
  )
)