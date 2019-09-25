import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import R from '../../../res/R';
import ClearToken from './StorageClear';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  exitImage: {
    height: SCREEN_WIDTH * 0.12,
    width: SCREEN_WIDTH * 0.12,
    marginRight: SCREEN_WIDTH * 0.05,
  },
});

export default class ExitButton extends Component {
  handlePress = () => {
    ClearToken();
    this.props.navigation.replace('EntryPoint');
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Image source={R.images.logout} style={styles.exitImage} />
      </TouchableOpacity>
    );
  }
}
