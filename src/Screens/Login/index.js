/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import R from '../../res/R';

import HandleSubmit from './HandleSubmit';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.background,
  },
  formContainer: {
    width: wp(70),
    height: hp(55),
    alignItems: 'center',
    backgroundColor: R.colors.background,
  },
  header: {
    fontSize: 40,
    marginTop: hp(1),
    marginBottom: hp(8),
    color: R.colors.textColor,
  },
  inputbox: {
    width: wp(60),
    height: hp(5),
    borderWidth: 1,
    margin: hp(2),
    padding: hp(0),
    paddingLeft: wp(3),
    backgroundColor: R.colors.formColor,
    borderColor: R.colors.formColor,
    top: -hp(4),
    borderRadius: 5,
    shadowColor: R.colors.textColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  submitButton: {
    width: wp(45),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp(1),
    borderRadius: 8,
    backgroundColor: R.colors.buttonColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    fontSize: 15,
    color: R.colors.background,
  },
});

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      signinWaiting: false,
      loginWaiting: false,
    };
  }

  handleButtonPress = calledFrom => {
    if (calledFrom === 'login') {
      this.setState({
        loginWaiting: true,
      });
    } else {
      this.setState({
        signinWaiting: true,
      });
    }
    const submitData = {
      username: this.state.username,
      password: this.state.password,
      type: calledFrom,
    };
    HandleSubmit(submitData).then(ret => {
      if (ret) {
        this.props.navigation.replace('Home', { username: this.state.username });
      } else {
        // TODO Handle wrong input
      }
    });
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Login</Text>
          <TextInput
            style={styles.inputbox}
            placeholder="Username"
            placeholderTextColor="black"
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
          />
          <TextInput
            style={styles.inputbox}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.handleButtonPress('login');
            }}
          >
            {this.state.loginWaiting ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <Text style={styles.buttonText}>Login!</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.handleButtonPress('signin');
            }}
          >
            {this.state.signinWaiting ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <Text style={styles.buttonText}>Signup!</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
