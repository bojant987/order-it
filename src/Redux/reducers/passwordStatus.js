import { actionTypes } from '../constants/actionTypes';

const initialState = {
    errorMessage: null,
    successMessage: null,
    isLoading: false,
};

export default function passwordStatus(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REQUEST_FORGOT_PASSWORD:
            return {
                ...state,
                errorMessage: null,
                successMessage: null,
                isLoading: true,
            };
        case actionTypes.RECEIVED_FORGOT_PASSWORD:
            return {
                ...state,
                errorMessage: null,
                successMessage: 'We sent instructions for password reset to your email.',
                isLoading: false,
            };
        case actionTypes.ERROR_FORGOT_PASSWORD:
            return {
                ...state,
                errorMessage: action.error.message,
                successMessage: null,
                isLoading: false,
            };
        case actionTypes.REQUEST_RESET_PASSWORD:
            return {
                ...state,
                errorMessage: null,
                successMessage: null,
                isLoading: true,
            };
        case actionTypes.RECEIVED_RESET_PASSWORD:
            return {
                ...state,
                errorMessage: null,
                successMessage: 'You can login with your new password now.',
                isLoading: false,
            };
        case actionTypes.ERROR_RESET_PASSWORD:
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