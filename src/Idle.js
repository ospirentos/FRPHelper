import React from 'react';

import { ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';

import R from './res/R';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.background,
  },
});

const Idle = () => {
  return (
    <ImageBackground style={styles.background} source={R.images.background}>
      <ActivityIndicator size="large" color={R.colors.buttonColor} />
    </ImageBackground>
  );
};

export default Idle;
