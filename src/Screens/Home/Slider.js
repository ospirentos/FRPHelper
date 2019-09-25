import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Dimensions, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import R from '../../res/R';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  inputStat: {
    width: SCREEN_WIDTH * 0.12,
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: R.colors.buttonColor,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputLabel: {
    fontSize: 18,
    margin: 5,
    color: R.colors.buttonColor,
    width: SCREEN_WIDTH * 0.15,
  },
});

export default class StatSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statValue: 10,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        statValue: this.props.value,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inputLabel}>{this.props.label}</Text>
        <Text style={styles.inputStat}>{this.state.statValue}</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={1}
          maximumValue={20}
          step={1}
          value={this.state.statValue}
          minimumTrackTintColor={R.colors.buttonColor}
          maximumTrackTintColor={R.colors.background}
          thumbTintColor={R.colors.buttonColor}
          onValueChange={value => {
            this.setState({ statValue: value });
            this.props.callback(this.props.label, value);
          }}
        />
      </View>
    );
  }
}
