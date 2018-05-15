import axios from 'axios';

export default function reduxAjax({ requestAction, successAction, errorAction, method = 'GET', params, url, auth=true, axiosArgs = {} }) {
    const token = localStorage.getItem('token');

    if (auth) {
        axiosArgs.headers['x-auth'] = token;
    }

    if (method === 'GET') {
        axiosArgs.params = params;
    } else {
        axiosArgs.data = params;
    }

    return dispatch => {
        if (requestAction) {
            dispatch(requestAction(axiosArgs.params));
        }

        return axios({
            ...axiosArgs,
            url,
            method,
        }).then(resp => {
            if (successAction) {
                dispatch(successAction(resp.data));
            }

            return resp.data;
        }).catch(error => {
            if (errorAction) {
                dispatch(errorAction(error.response.data));
            }
        });
    }
}