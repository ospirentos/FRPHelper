/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { name as appName } from './app.json';

import App from './src';
import Home from './src/Screens/Home';

YellowBox.ignoreWarnings(['Warning: ViewPagerAndroid has been extracted']);

const AppNavigator = createStackNavigator({
  EntryPoint: {
    screen: App,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.username}`.toUpperCase(),
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
});

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
