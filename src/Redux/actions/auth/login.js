import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

export const login = (redirectCallback, params) => {
    return dispatch => {
        dispatch(
            reduxAjax({
                actionTypePrefix: 'LOGIN',
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