import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PlayerCard from './PlayerCard';

import R from '../../res/R';
import Slider from './Slider';
import PostNewCharData from './PostNewCharData';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: R.colors.background,
    alignItems: 'center',
  },
  inputCharacterName: {
    borderBottomColor: R.colors.buttonColor,
    borderBottomWidth: 1,
    width: SCREEN_WIDTH * 0.4,
    padding: 3,
    margin: 10,
  },
  labelCharacterName: {
    fontSize: 20,
  },
  buttonSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.buttonColor,
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.05,
    borderRadius: 5,
    margin: 10,
  },
  diceImage: {
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_WIDTH * 0.15,
    margin: SCREEN_HEIGHT * 0.01,
  },
});

export default class CreateCharacter extends Component {
  static navigationOptions = {
    title: 'Create a new character',
    headerStyle: {
      backgroundColor: R.colors.buttonColor,
    },
    headerTintColor: R.colors.textColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      charName: '',
      STR: 0,
      DEX: 0,
      INT: 0,
      CHA: 0,
      pending: false,
    };
  }

  handleRandomization = () => {
    this.setState({
      STR: Math.floor(Math.random() * 20 + 1),
      DEX: Math.floor(Math.random() * 20 + 1),
      INT: Math.floor(Math.random() * 20 + 1),
      CHA: Math.floor(Math.random() * 20 + 1),
    });
  };

  handleSubmit = () => {
    this.setState({ pending: true });
    const userData = this.props.navigation.getParam('userData', 'none');
    if (userData !== 'none') {
      const charData = {
        username: userData.username,
        name: this.state.charName,
        str: this.state.STR,
        dex: this.state.DEX,
        int: this.state.INT,
        cha: this.state.CHA,
      };
      PostNewCharData(charData).then(response => {
        if (response === true) {
          this.props.navigation.goBack();
        } else {
          console.log('Erorr, failed to create new character.');
        }
      });
    } else {
      console.log('Username error, no usernames provided!');
      Alert.alert(
        'Error',
        'Something went wrong',
        [
          {
            text: 'Ok',
            onPress: () => this.props.navigation.navigate('Characters'),
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
  };

  getFormData = (label, formData) => {
    switch (label) {
      case 'STR':
        this.setState({
          STR: formData,
        });
        break;
      case 'DEX':
        this.setState({
          DEX: formData,
        });
        break;
      case 'INT':
        this.setState({
          INT: formData,
        });
        break;
      case 'CHA':
        this.setState({
          CHA: formData,
        });
        break;
      default:
        throw new Error('Something wrong with the new char form.');
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <PlayerCard>
          <Text style={styles.labelCharacterName}>Character Name</Text>
          <TextInput
            style={styles.inputCharacterName}
            textAlign="center"
            onChangeText={value => this.setState({ charName: value })}
          />
          <Slider label="STR" value={this.state.STR} callback={this.getFormData} />
          <Slider label="DEX" value={this.state.DEX} callback={this.getFormData} />
          <Slider label="INT" value={this.state.INT} callback={this.getFormData} />
          <Slider label="CHA" value={this.state.CHA} callback={this.getFormData} />
          <TouchableOpacity onPress={this.handleRandomization}>
            <Image source={R.images.dice} style={styles.diceImage} />
          </TouchableOpacity>
          {this.state.pending ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <TouchableOpacity style={styles.buttonSubmit} onPress={this.handleSubmit}>
              <Text>Submit</Text>
            </TouchableOpacity>
          )}
        </PlayerCard>
      </View>
    );
  }
}
