import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

export const activateAccount = (params, callback) => {
    return dispatch => {
        return dispatch(reduxAjax({
            actionTypePrefix: 'ACTIVATE_ACCOUNT',
            auth: false,
            params,
            url: `${BASE_URL}/users/activate`,
            method: 'POST',
        })).then(() => {
            callback();
        }).catch(e => {});
    }
};