
const apiUrls = {
    // development: 'http://localhost:3000',
    development: 'https://powerful-reef-16069.herokuapp.com',
    production: 'https://powerful-reef-16069.herokuapp.com',
};

export const BASE_URL = apiUrls[process.env.NODE_ENV];