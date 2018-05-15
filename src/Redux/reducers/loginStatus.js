import { actionTypes } from '../constants/actionTypes';

const initialState = {
    errorMessage: null,
    isLoading: false,
    isLoggedIn: false,
};

export default function loginStatus(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REQUEST_LOGIN:
            return {
                ...state,
                errorMessage: null,
                isLoading: true,
                isLoggedIn: false,
            };
        case actionTypes.RECEIVED_LOGIN:
            return {
                ...state,
                errorMessage: null,
                isLoading: false,
                isLoggedIn: true,
            };
        case actionTypes.ERROR_LOGIN:
            return {
                ...state,
                errorMessage: action.error.message,
                isLoading: false,
                isLoggedIn: false,
            };
        case actionTypes.CLEAR_FORM_STATUS:
            return {
                ...state,
                errorMessage: null,
            };
        default:
            return state;
    }
}