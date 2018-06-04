import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

export const resetPassword = params => {
    return reduxAjax({
        actionTypePrefix: 'RESET_PASSWORD',
        auth: false,
        params,
        url: `${BASE_URL}/users/passwordreset`,
        method: 'POST',
    });
};