import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import R from '../../res/R';

const WaitingIcon = () => {
  return (
    <View style={{ flex: 1, backgroundColor: R.colors.backgroundColor }}>
      <ActivityIndicator size="large" color={R.colors.buttonColor} />
      <Text style={{ color: R.colors.textColor }}>Retrieving info from server...</Text>
    </View>
  );
};

export default WaitingIcon;
