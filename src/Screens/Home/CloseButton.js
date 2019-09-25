import React from 'react';
import { TouchableOpacity, Image, Dimensions, StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types';
import R from '../../res/R';
import RemoveCharacter from './RemoveCharacter';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: -5,
  },
  buttonIcon: {
    width: SCREEN_HEIGHT * 0.04,
    height: SCREEN_HEIGHT * 0.04,
  },
});

const CloseButton = props => {
  const { charname, username } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        Alert.alert(
          'Alert',
          'Do you really want to remove the character? This cannot be undone!',
          [
            {
              text: 'Yes',
              onPress: () =>
                RemoveCharacter(charname, username).then(response => {
                  if (response === true) {
                    props.callback();
                  }
                }),
              style: 'cancel',
            },
            {
              text: 'No',
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
      }}
    >
      <Image source={R.images.CloseButton} style={styles.buttonIcon} />
    </TouchableOpacity>
  );
};

CloseButton.propTypes = {
  charname: PropTypes.string,
  username: PropTypes.string,
};

CloseButton.defaultProps = {
  charname: 'untitled',
  username: 'untitled',
};

export default CloseButton;
