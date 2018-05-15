import { actionTypes } from '../../constants/actionTypes';
import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

const requestSignUp = () => ({
    type: actionTypes.REQUEST_SIGNUP,
});

const receivedSignUp = data => ({
    type: actionTypes.RECEIVED_SIGNUP,
    data,
});

const errorSignUp = error => ({
    type: actionTypes.ERROR_SIGNUP,
    error,
});

export const signUp = params => {
    return reduxAjax({
        requestAction: requestSignUp,
        successAction: receivedSignUp,
        errorAction: errorSignUp,
        auth: false,
        params,
        url: `${BASE_URL}/users`,
        method: 'POST',
    });
};