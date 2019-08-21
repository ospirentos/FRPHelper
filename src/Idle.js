import React from 'react';

import { ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';

import R from './res/R';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Idle = () => {
  return (
    <ImageBackground style={styles.background} source={R.images.background}>
      <ActivityIndicator size="large" color="red" />
    </ImageBackground>
  );
};

export default Idle;
