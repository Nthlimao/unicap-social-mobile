import { AsyncStorage } from 'react-native';

const SCHEDULE_KEY = '8167b3293e8f6737da852189f9eb5691';

const read = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(SCHEDULE_KEY, (error, result) => {
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
        AsyncStorage.setItem(SCHEDULE_KEY, JSON.stringify(values), (error) => {
            if(error) return reject(false);
    
            resolve(true);
        });        
    });
}

const clear = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem(SCHEDULE_KEY, (error) => {
            if(error) return reject(false);
    
            resolve(true);
        })
    })
}

export const getGrade = async() => {
    return await read();
}

export const setGrade = async(grade) => {
    await clear();
    await write(grade);
}

export const removeGrade = async() => {
    await clear();
}