import { AsyncStorage } from 'react-native';

export const getStorage = (key) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key, (error, result) => {
            console.log('getItem');
            if(error) reject(null);
            
            resolve(result);
        })
    });
}

export const setStorage = (key, value) => {
    console.log('set');
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(key, value, (error) => {
            console.log('AsyncStorage');
            if(error) return reject(false);
    
            resolve(true);
        });        
    });
}

export const removeStorage = (key) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem(key, (error) => {
            if(error) return reject(false);
    
            resolve(true);
        })
    })
}

export const clearStorage = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.clear((error) => {
            if(error) return reject(false);
    
            resolve(true);
        });        
    });
}