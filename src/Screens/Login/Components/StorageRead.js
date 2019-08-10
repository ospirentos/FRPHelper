
import AsyncStorage from '@react-native-community/async-storage';

let StorageRead = async () => {
    try {
        const value = await AsyncStorage.getItem('userData');
        if (value !== null) {
            return JSON.parse(value);
        } else {
            return -1;
        }
    } catch (e) {
        console.log(e)
    }
}

export default StorageRead;