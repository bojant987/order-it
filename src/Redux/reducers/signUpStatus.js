import { actionTypes } from '../constants/actionTypes';

const initialState = {
    errorMessage: null,
    successMessage: null,
    isLoading: false,
};

export default function signUpStatus(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REQUEST_SIGNUP:
            return {
                ...state,
                errorMessage: null,
                successMessage: null,
                isLoading: true,
            };
        case actionTypes.RECEIVED_SIGNUP:
            return {
                ...state,
                errorMessage: null,
                successMessage: "You have successfully signed up! Check you email to activate your account.",
                isLoading: false,
            };
        case actionTypes.ERROR_SIGNUP:
            return {
                ...state,
                errorMessage: action.error.message,
                successMessage: null,
                isLoading: false,
            };
        case actionTypes.CLEAR_FORM_STATUS:
            return initialState;
        default:
            return state;
    }
}