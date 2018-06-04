import axios from 'axios';

export default function reduxAjax({ getData, actionTypePrefix='', requestAction, successAction, errorAction, method = 'GET', params, url, auth=true, axiosArgs = {} }) {
    const token = localStorage.getItem('token');

    const actionTypes = {
        request: `REQUEST_${actionTypePrefix}`,
        success: `RECEIVED_${actionTypePrefix}`,
        error: `ERROR_${actionTypePrefix}`,
    };
    const actionHandlers = {
        request: params => ({
            type: actionTypes.request,
            params,
        }),
        success: data => ({
            type: actionTypes.success,
            data,
        }),
        error: error => ({
            type: actionTypes.error,
            error,
        }),
    };


    if (auth) {
        axiosArgs.headers['x-auth'] = token;
    }

    if (method === 'GET') {
        axiosArgs.params = params;
    } else {
        axiosArgs.data = params;
    }

    return dispatch => {
        const requestAC = actionHandlers.request || requestAction;
        const successAC = actionHandlers.success || successAction;
        const errorAC = actionHandlers.error || errorAction;

        dispatch(requestAC(axiosArgs.params));

        return axios({
            ...axiosArgs,
            url,
            method,
        }).then(resp => {
            if (getData) {
                dispatch(successAC(getData(resp.data)));
            } else {
                dispatch(successAC(resp.data));
            }

            return resp.data;
        }).catch(error => {
            dispatch(errorAC(error.response.data));
        });
    }
}