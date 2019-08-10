
import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  ImageBackground
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';


import conparam from './Config'

import UserHome from './UserHome'

import DMHome from './DMHome'

import backgroundImage from "./static/background3.jpg"

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dmtag: 0
    }
  }
  logout = async () => {
    const { navigate } = this.props.navigation;
    try {
      await AsyncStorage.removeItem('userData');
      navigate('Login');
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    const username = this.props.navigation.getParam('username', 'none');
    fetch(conparam.connectionIP + '/api/getUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username }),
    }).then(function (response) {
      return response.json();
    }).then((result) => {
      console.log(result.userData)
      if (result.successfull !== true) {
        console.warn('Error!');
      } else {
        this.setState({
          dmtag: result.userData.DMFlag === true ? 1 : 2,
          userData: result.userData
        })
      }
    }).catch((e) => {
      console.log("App.js componentDidMount throws an error: ", e);
    })

    this.callbackfunction = this.props.navigation.getParam('callbackFunc', 'none')
    if (this.callbackfunction === 'none') {
      console.log('callbackLogin returns none!');
    }
  }

  componentWillUnmount() {

  }
""
  render() {
    if (this.state.dmtag === 0) {
      return (
        <ImageBackground style={styles.background} source={backgroundImage}> 
          <ActivityIndicator size='large' color="#000000" />
        </ImageBackground>
      );
    } else if (this.state.dmtag === 1) {
      return (
        <DMHome navigation={this.props.navigation} callbackFunction={this.props.navigation.getParam('callbackFunc', 'none')} />
      );
    } else {
      return (
        <UserHome navigation={this.props.navigation} callbackFunction={this.props.navigation.getParam('callbackFunc', 'none')} userData={this.state.userData} />
      );
    }
  }
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
