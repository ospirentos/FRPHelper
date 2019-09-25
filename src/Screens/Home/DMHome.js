import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';
import Players from './Players';
import Requests from './Requests';
import R from '../../res/R';

const styles = StyleSheet.create({
  tabBarFont: {
    fontSize: 40,
  },
  indicator: {
    backgroundColor: R.colors.background,
    height: 5,
  },
});

const DMHomeTab = createMaterialTopTabNavigator(
  {
    Players,
    Requests,
  },
  {
    tabBarOptions: {
      activeTintColor: R.colors.background,
      inactiveTintColor: R.colors.textColor,
      labelStyle: {
        fontSize: 20,
      },
      tabStyle: {},
      style: { backgroundColor: R.colors.buttonColor },
      indicatorStyle: styles.indicator,
    },
  }
);

const DMHome = createAppContainer(DMHomeTab);
export default DMHome;
