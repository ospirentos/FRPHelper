import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import R from '../../res/R';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.formColor,
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.9,
    borderRadius: 10,
    marginTop: SCREEN_HEIGHT * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.02,
    paddingTop: SCREEN_HEIGHT * 0.02,
    paddingBottom: SCREEN_HEIGHT * 0.02,
    paddingLeft: SCREEN_WIDTH * 0.005,
    paddingRight: SCREEN_WIDTH * 0.005,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
const PlayerCard = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (props.onPress ? props.onPress() : {})}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default PlayerCard;
