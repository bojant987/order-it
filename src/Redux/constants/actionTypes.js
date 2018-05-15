import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
    /* LOGIN */
	REQUEST_LOGIN: null,
	RECEIVED_LOGIN: null,
    ERROR_LOGIN: null,
    LOCAL_STORAGE_ERROR: null,

    /* SIGNUP */
    REQUEST_SIGNUP: null,
    RECEIVED_SIGNUP: null,
    ERROR_SIGNUP: null,

    /* ACTIVATE ACCOUNT */
    REQUEST_ACTIVATE_ACCOUNT: null,
    RECEIVED_ACTIVATE_ACCOUNT: null,
    ERROR_ACTIVATE_ACCOUNT: null,

    /* FORGOT PASSWORD */
    REQUEST_FORGOT_PASSWORD: null,
    RECEIVED_FORGOT_PASSWORD: null,
    ERROR_FORGOT_PASSWORD: null,

    /* RESET PASSWORD */
    REQUEST_RESET_PASSWORD: null,
    RECEIVED_RESET_PASSWORD: null,
    ERROR_RESET_PASSWORD: null,

    /* GLOBAL */
    CLEAR_FORM_STATUS: null,
});
