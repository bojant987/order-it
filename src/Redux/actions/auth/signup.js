import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

export const signUp = params => {
    return reduxAjax({
        actionTypePrefix: 'SIGNUP',
        auth: false,
        params,
        url: `${BASE_URL}/users`,
        method: 'POST',
    });
};