import AsyncStorage from '@react-native-community/async-storage';

const StorageClear = async () => {
  try {
    await AsyncStorage.removeItem('userData');
  } catch (e) {
    throw new Error(e);
  }
};

export default StorageClear;
