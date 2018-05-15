import { actionTypes } from '../../constants/actionTypes';
import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

const requestLogin = () => ({
    type: actionTypes.REQUEST_LOGIN,
});

const receivedLogin = data => ({
    type: actionTypes.RECEIVED_LOGIN,
    data,
});

const errorLogin = error => ({
    type: actionTypes.ERROR_LOGIN,
    error,
});

export const login = (redirectCallback, params) => {
    return dispatch => {
        dispatch(
            reduxAjax({
                requestAction: requestLogin,
                successAction: receivedLogin,
                errorAction: errorLogin,
                auth: false,
                params,
                url: `${BASE_URL}/users/login`,
                method: 'POST',
            })
        ).then(resp => {
            localStorage.setItem('token', resp.token);

            redirectCallback();
        }).catch(e => {});
    };
};