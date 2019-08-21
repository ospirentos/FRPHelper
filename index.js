/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { name as appName } from './app.json';

import App from './src';
import Home from './src/Screens/Home';

const AppNavigator = createStackNavigator({
  EntryPoint: {
    screen: App,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: Home,
  },
});

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
