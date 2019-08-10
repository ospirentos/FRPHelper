import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  AppState
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

const Render = () => (
  <View style={styles.logoutMenu}></View>
);

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHP: 1000,
      currentHP: 500,
      userData: props.userData
    }

    const connectionConfig = {
      timeout: 10000,
      jsonp: false,
      transports: ['websocket'],
      autoConnect: true,
      agent: '-',
      path: '/socket.io',
      pfx: '-',
      key: '-',
      passphrase: '-',
      cert: '-',
      ca: '-',
      ciphers: '-',
      rejectUnauthorized: '-',
      perMessageDeflate: '-'
    };
    const socket = io('http://192.168.2.151:80', connectionConfig);

    socket.on('connect', () => {
      socket.emit('User', this.state.userData.username);
    });
    socket.on('connect_error', (err) => {
      console.log(err)
    })
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

  render() {
    const hpBardWidth = {width : this.state.currentHP * 300 / this.state.maxHP}
    return (
      <MenuProvider>
        <ImageBackground style={styles.background} source={backgroundImage} >
          <View style={styles.containerFirst}>
            <View style={styles.characterImage}>
              <Menu>
                <MenuTrigger children={<Render />} />
                <MenuOptions>
                  <MenuOption onSelect={this.logout} text='Change Character' />
                </MenuOptions>
              </Menu>
            </View>
            <Text style={styles.characterName}>{this.state.userData.username}</Text>
          </View>
          <View style={styles.hpBar}>
            <View style={[styles.hpAmountBar, hpBardWidth]}></View>
            <Text style={styles.hpBarText}>HP: {this.state.currentHP}/1000</Text>
          </View>
          <View style={styles.containerSecond}>
            <View style={styles.attributesArea}>
              <Text style={styles.attribute}>STR: 50</Text>
              <Text style={styles.attribute}>DEX: 50</Text>
              <Text style={styles.attribute}>INT: 50</Text>
              <Text style={styles.attribute}>CHA: 50</Text>
            </View>
            <View style={styles.itemsArea}>
              <TouchableOpacity style={styles.items} />
              <Text style={styles.itemText}>Weapon</Text>
              <TouchableOpacity style={styles.items} />
              <Text style={styles.itemText}>Armour</Text>
              <TouchableOpacity style={styles.items} />
              <Text style={styles.itemText}>Jewel</Text>
            </View>
          </View>
          <View style={styles.containerThird}>
            <TouchableOpacity style={styles.skills} />
            <TouchableOpacity style={styles.skills} />
            <TouchableOpacity style={styles.skills} />
            <TouchableOpacity style={styles.skills} />
          </View>
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
  containerFirst: {
    borderColor: "black",
    borderWidth: 1,
    width: 350,
    height: 100,
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  characterImage: {
    borderColor: "black",
    borderWidth: 1,
    width: 80,
    height: 80,
    margin: 5
  },
  characterName: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    borderColor: 'black',
    borderWidth: 1
  },
  hpBar: {
    backgroundColor: 'black',
    width: 300,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hpAmountBar: {
    backgroundColor: 'red',
    width: 20,
    height: 30,
    alignSelf: 'flex-start'
  },
  hpBarText: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerSecond: {
    borderColor: "black",
    borderWidth: 1,
    width: 350,
    height: 300,
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  attributesArea: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    margin: 10
  },
  attribute: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 7
  },
  itemsArea: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  items: {
    borderColor: 'black',
    borderWidth: 1,
    width: 50,
    height: 50,
    margin: 5
  },
  itemText: {
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },
  containerThird: {
    borderColor: "black",
    borderWidth: 1,
    width: 350,
    height: 125,
    margin: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  skills: {
    borderColor: 'black',
    borderWidth: 1,
    width: 75,
    height: 75,
    margin: 5
  },
  logoutMenu: {
    borderColor: "red",
    borderWidth: 1,
    height: 80,
    width: 80
  }
});