import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';
import Characters from './Characters';
import R from '../../res/R';
import CreateCharacter from './CreateCharacter';
import CharacterHome from './CharacterHome';

const styles = StyleSheet.create({
  tabBarFont: {
    fontSize: 40,
  },
  indicator: {
    backgroundColor: R.colors.background,
    height: 5,
  },
});

const UserHomeTab = createStackNavigator({
  Characters,
  CreateCharacter,
  CharacterHome,
});

const UserHome = createAppContainer(UserHomeTab);
export default UserHome;
