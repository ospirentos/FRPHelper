/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {} from 'react-native';
import StorageRead from './components/StorageRead';
import LoginPage from './Screens/Login/index';
import Idle from './Idle';
import Login from './components/LoginWithToken';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageValue: 0,
    };
  }

  componentDidMount() {
    StorageRead().then(readValue => {
      this.setState({
        storageValue: readValue,
      });

      if (readValue !== -1) {
        Login(readValue).then(ret => {
          if (ret.successfull) {
            const { username } = readValue;
            this.props.navigation.replace('Home', { username });
          } else {
            this.setState({
              storageValue: 1,
            });
          }
        });
      }
    });
  }

  render() {
    const { storageValue } = this.state;
    if (storageValue === 0) {
      return <Idle />;
    }
    return <LoginPage storageValue={storageValue} navigation={this.props.navigation} />;
  }
}
