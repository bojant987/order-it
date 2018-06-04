import reduxAjax from '../../adapters/reduxAjax';
import { BASE_URL } from "../../constants/apiInfo";

export const forgotPassword = params => {
    return reduxAjax({
        actionTypePrefix: 'FORGOT_PASSWORD',
        auth: false,
        params,
        url: `${BASE_URL}/users/forgotpassword`,
        method: 'POST',
    });
};