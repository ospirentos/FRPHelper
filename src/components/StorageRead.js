import AsyncStorage from '@react-native-community/async-storage';

const StorageRead = async () => {
  try {
    const value = await AsyncStorage.getItem('userData');
    if (value !== null) {
      return JSON.parse(value);
    }
    return -1;
  } catch (e) {
    throw new Error(e);
  }
};

export default StorageRead;
