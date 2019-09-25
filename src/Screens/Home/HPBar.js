import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import R from '../../res/R';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  hpBar: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_HEIGHT * 0.032,
    backgroundColor: 'black',
    marginTop: SCREEN_HEIGHT * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hpBarFilled: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.032,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  hpBarText: {
    position: 'absolute',
    color: R.colors.background,
  },
});

const HPBar = props => {
  const { max, current } = props;
  const currentHpBarWidth = (current * styles.hpBar.width) / max;
  return (
    <View style={styles.hpBar}>
      <View style={[styles.hpBarFilled, { width: currentHpBarWidth }]} />
      <Text style={styles.hpBarText}>
        {current} / {max}
      </Text>
    </View>
  );
};

HPBar.propTypes = {
  max: PropTypes.number,
  current: PropTypes.number,
};

HPBar.defaultProps = {
  max: 1,
  current: 1,
};
export default HPBar;
