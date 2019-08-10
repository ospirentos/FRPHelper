
import AsyncStorage from '@react-native-community/async-storage';

let StorageAdd = async (props) => {
    try {
        await AsyncStorage.setItem('userData', props)
    } catch (e) {
        console.error(e.message);
    }
}

export default StorageAdd;