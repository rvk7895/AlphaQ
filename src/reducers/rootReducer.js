import authReducer from './authReducer';
import eventReducer from './eventReducer';
import roomReducer from './roomReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    room: roomReducer
});

export default rootReducer;