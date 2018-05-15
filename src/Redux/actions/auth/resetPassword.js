import { actionTypes } from '../../constants/actionTypes';
import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

const requestResetPassword = () => ({
    type: actionTypes.REQUEST_RESET_PASSWORD,
});

const receivedResetPassword = data => ({
    type: actionTypes.RECEIVED_RESET_PASSWORD,
    data,
});

const errorResetPassword = error => ({
    type: actionTypes.ERROR_RESET_PASSWORD,
    error,
});

export const resetPassword = params => {
    return reduxAjax({
        requestAction: requestResetPassword,
        successAction: receivedResetPassword,
        errorAction: errorResetPassword,
        auth: false,
        params,
        url: `${BASE_URL}/users/passwordreset`,
        method: 'POST',
    });
};