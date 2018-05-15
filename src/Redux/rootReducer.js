import { combineReducers } from 'redux';
import loginStatus from './reducers/loginStatus';
import signUpStatus from './reducers/signUpStatus';
import passwordStatus from './reducers/passwordStatus';

export default combineReducers({
    loginStatus,
    signUpStatus,
    passwordStatus,
});
