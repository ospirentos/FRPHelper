import AsyncStorage from '@react-native-community/async-storage';

const StorageAdd = async props => {
  try {
    await AsyncStorage.setItem('userData', props);
  } catch (e) {
    throw new Error(e);
  }
};

export default StorageAdd;
