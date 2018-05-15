export default {
    email: value => {
        return {
            isValid: value.length > 0 && value.includes('@'),
            errorMessage: 'Please enter valid email address',
        };
    },
    password: value => {
        return {
            isValid: value.length > 5,
            errorMessage: 'Password must be at least 6 characters long',
        };
    },
    required: value => {
        return {
            isValid: value.length > 0,
            errorMessage: 'This field is required',
        };
    },
};