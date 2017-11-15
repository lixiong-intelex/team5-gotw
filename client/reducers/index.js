import { combineReducers } from 'redux';
import  geekList  from './geekListReducer';

const rootReducer = combineReducers({
    geekList,
});

export default rootReducer;