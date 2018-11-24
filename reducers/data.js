import {
    combineReducers
} from 'redux';
import {
    About
} from './about/reducer';
import { Home } from './home/reducer';

// 合并到主reducer
const reducers = {
    "About": About,
    "Home": Home
};

// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer 
export default combineReducers(reducers);
//