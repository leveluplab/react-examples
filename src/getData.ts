import users from './users.json';

export const getUserData = new Promise((resolve, reject) => {
    resolve(users);
});