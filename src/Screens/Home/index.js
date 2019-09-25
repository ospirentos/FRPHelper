/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text } from 'react-native';
import Idle from '../../Idle';
import Fetch from './components/FetchUser';
import ExitButton from './components/ExitButton';
import R from '../../res/R';
import DMHome from './DMHome';
import UserHome from './UserHome';
import ClearToken from './components/StorageClear';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <ExitButton navigation={navigation} />,
      headerStyle: {
        backgroundColor: R.colors.buttonColor,
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      dmFlag: -1,
      userData: {},
    };
    const username = this.props.navigation.getParam('username', 'none');
  }

  componentDidMount() {
    const username = this.props.navigation.getParam('username', 'none');
    if (username !== 'none') {
      this.props.navigation.setParams();
      Fetch(username).then(ret => {
        this.setState({
          dmFlag: ret.userData.dmFlag,
          userData: ret.userData,
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
      return <DMHome screenProps={{ userData: this.state.userData }} />;
    }
    return <UserHome screenProps={{ userData: this.state.userData }} />;
  }
}
