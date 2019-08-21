/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import Idle from '../../Idle';
import Fetch from './components/FetchUser';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: <Button onPress={() => alert('This is a button!')} title="Info" color="#fff" />,
  };

  constructor(props) {
    super(props);
    this.state = {
      dmFlag: -1,
    };
  }

  componentDidMount() {
    const username = this.props.navigation.getParam('username', 'none');
    if (username !== 'none') {
      Fetch(username).then(ret => {
        this.setState({
          dmFlag: ret.userData.dmFlag,
        });
      });
    } else {
      throw new Error('Cannot fetch user data');
    }
  }

  render() {
    const { dmFlag } = this.state;
    if (dmFlag === -1) {
      return <Idle />;
    }
    if (dmFlag) {
      return <Text>DM</Text>;
    }
    return <Text>User</Text>;
  }
}
