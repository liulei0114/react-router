import { combineReducers } from 'redux'
import {loginReducer} from '../reducer/LoginReducer'
import {conuntReducer} from '../reducer/ConuntReducer'
import {postReducer} from '../reducer/PostReducer'
// 多个reducer合并
export const reducers = combineReducers({ login: loginReducer, count: conuntReducer, post: postReducer })