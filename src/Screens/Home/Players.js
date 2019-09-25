import React, { Component } from 'react';
import { View } from 'react-native';
import PlayerCard from './PlayerCard';

export default class Players extends Component {
  render() {
    const { userData } = this.props.screenProps;
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <PlayerCard userData={userData} />
      </View>
    );
  }
}
