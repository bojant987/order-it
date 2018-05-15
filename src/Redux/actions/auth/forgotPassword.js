import { actionTypes } from '../../constants/actionTypes';
import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

const requestForgotPassword = () => ({
    type: actionTypes.REQUEST_FORGOT_PASSWORD,
});

const receivedForgotPassword = data => ({
    type: actionTypes.RECEIVED_FORGOT_PASSWORD,
    data,
});

const errorForgotPassword = error => ({
    type: actionTypes.ERROR_FORGOT_PASSWORD,
    error,
});

export const forgotPassword = params => {
    return reduxAjax({
        requestAction: requestForgotPassword,
        successAction: receivedForgotPassword,
        errorAction: errorForgotPassword,
        auth: false,
        params,
        url: `${BASE_URL}/users/forgotpassword`,
        method: 'POST',
    });
};