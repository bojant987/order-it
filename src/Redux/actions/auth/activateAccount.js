import { actionTypes } from '../../constants/actionTypes';
import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

const requestActivateAccount = () => ({
    type: actionTypes.REQUEST_ACTIVATE_ACCOUNT,
});

const receivedActivateAccount = data => ({
    type: actionTypes.RECEIVED_ACTIVATE_ACCOUNT,
    data,
});

const errorActivateAccount = error => ({
    type: actionTypes.ERROR_ACTIVATE_ACCOUNT,
    error,
});

export const activateAccount = (params, callback) => {
    return dispatch => {
        return dispatch(reduxAjax({
            requestAction: requestActivateAccount,
            successAction: receivedActivateAccount,
            errorAction: errorActivateAccount,
            auth: false,
            params,
            url: `${BASE_URL}/users/activate`,
            method: 'POST',
        })).then(() => {
            callback();
        }).catch(e => {});
    }
};