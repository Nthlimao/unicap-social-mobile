import { AsyncStorage } from 'react-native';
import { LOGIN } from '../../services/schemas.graphql';

const USER_KEY = '65fcd078ba8f144a26339c8c44e3c42b';

const read = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY, (error, result) => {
            if(error) reject(null);
    
            const data = (result !== null) 
                ? JSON.parse(result) || null
                : null; 

            resolve(data);
        })
    });
}

const write = (values) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(USER_KEY, JSON.stringify(values), (error) => {
            if(error) return reject(false);
    
            resolve(true);
        });        
    });
}

const clear = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem(USER_KEY, (error) => {
            if(error) return reject(false);
    
            resolve(true);
        })
    })
}

export const getUser = async() => {
    return await read();
}

export const getToken = async() => {
    const user = await read();

    return (user && user.token)
        ? user.token
        : null;
}

export const isLoggedIn = async() => {
    const user = await read();

    return (user && user.token)
        ? true
        : false;
}

export const login = async(data) => {
    const { student, token } = data;
    student.token = token;

    await write(student);
}

export const logout = async() => {
    return await clear();
}