import { combineReducers } from 'redux';
import navigation from './navigation';
import notes from './notes';

const reducer = combineReducers({ navigation, notes });

export default reducer;
