import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import AsyncStorage from '@react-native-community/async-storage';
import backgroundImage from "./static/background3.jpg"
import conparam from './connectionparams'

import io from 'socket.io-client';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const Render = () => (
  <View style={styles.logoutMenu}></View>
);

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }

    const connectionConfig = {
      timeout: 10000,
      jsonp: false,
      transports: ['websocket'],
      autoConnect: true,
      agent: '-',
      path: '/admin',
      pfx: '-',
      key: '-',
      passphrase: '-',
      cert: '-',
      ca: '-',
      ciphers: '-',
      rejectUnauthorized: '-',
      perMessageDeflate: '-'
    };
    this.socket = io('http://192.168.2.151:80', connectionConfig);

  }

  logout = async () => {
    const { navigate } = this.props.navigation;
    try {
      await AsyncStorage.removeItem('userData');
      this.props.callbackFunction();
      navigate('Login');
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    const containerSize = { height: wp(70) * 0.59 }
    const styleContainer = StyleSheet.flatten([styles.userContainer, containerSize]);
    this.socket.on('UserInfo', (data) => {
      const players = data.map((user) =>
        <ImageBackground
          key={user.username.toString()}
          style={styleContainer}
          source={require('./static/parchmentBgH.png')}
        >
          <Text>{user.username}</Text>
        </ImageBackground>
      );
      this.setState({
        players: players
      });
    });
  }

  componentWillUnmount() {
  }

  render() {
    const containerSize = { height: wp(70) * 0.59 }
    const styleContainer = StyleSheet.flatten([styles.userContainer, containerSize]);
    let RenderUsers = this.state.users.map((user) =>
      <ImageBackground
        key={user.username.toString()}
        style={styleContainer}
        source={require('./static/parchmentBgH.png')}
      >
        <Text>{user.username}</Text>
      </ImageBackground>
    );
    return (
      <MenuProvider>
        <ImageBackground style={styles.background} source={backgroundImage} >
          {this.state.players}
          <TouchableOpacity onPress={this.logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </ImageBackground>
      </MenuProvider>

    );
  }
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center"
  },
  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: wp(80),
    margin: hp(2)
  }
});