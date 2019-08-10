/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { createStackNavigator, createAppContainer } from "react-navigation";

import App from './src'

const AppNavigator = createStackNavigator(
    {
        EntryPoint: {
            screen: App
        }
    }, {
        defaultNavigationOptions: {
            header: null
        }
    });



AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
