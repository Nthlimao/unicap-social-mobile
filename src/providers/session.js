import { AsyncStorage } from 'react-native';

const SESSION_KEY = '03c664d79ef6b2777062fdba83ac92a8';

const read = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(SESSION_KEY, (error, result) => {
            if(error) reject(null);
    
            const data = (result !== null) 
                ? result
                : null; 

            resolve(data);
        })
    });
}

const write = (value) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(SESSION_KEY, value, (error) => {
            if(error) return reject(false);
    
            resolve(true);
        });        
    });
}

const clear = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem(SESSION_KEY, (error) => {
            if(error) return reject(false);
    
            resolve(true);
        })
    })
}

export const setSession = async (session) =>{
    await clear();
    await write(session);
}

export const getSession = async () => {
    return await read();
}