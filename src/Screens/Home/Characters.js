import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  FlatList,
  VirtualizedList,
  StatusBar,
} from 'react-native';

import R from '../../res/R';
import PlayerCard from './PlayerCard';
import HPBar from './HPBar';
import CloseButton from './CloseButton';
import Fetch from './components/FetchUser';
import WaitingIcon from './WaitingIcon';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  buttonImage: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_WIDTH * 0.2,
  },
  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  statContainer: {
    flexDirection: 'row',
  },
  statString: {
    marginRight: 10,
  },
  charNameString: {
    marginTop: 10,
  },
  scrollContainer: {
    alignItems: 'center',
  },
});

export default class Characters extends Component {
  static navigationOptions = {
    title: 'Characters',
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
    const { userData } = this.props.screenProps;
    this.state = {
      idle: true,
      userData,
      count: userData.characters.length,
    };
    this.updateCharacters = this.updateCharacters.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      // The screen is focused
      // Call any action
      this.setState({
        idle: true,
      });
      const { userData } = this.state;
      const { username } = userData;
      Fetch(username).then(ret => {
        this.setState({
          userData: ret.userData,
          idle: false,
        });
      });
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  updateCharacters = () => {
    this.setState({
      idle: true,
    });
    const { userData } = this.state;
    const { username } = userData;
    Fetch(username).then(ret => {
      this.setState({
        userData: ret.userData,
        idle: false,
      });
    });
  };

  playerCardClickHandler = character => {
    this.props.navigation.navigate('CharacterHome', { data: character });
  };

  render() {
    console.log(this.state.count);
    const { userData } = this.state;
    const { username } = userData;
    const characters = userData.characters.map(character => (
      <PlayerCard
        key={character.name + character.str}
        onPress={() => this.playerCardClickHandler(character)}
      >
        <CloseButton
          charname={character.name}
          username={username}
          callback={this.updateCharacters}
        />
        <View style={styles.statContainer}>
          <Text style={styles.statString}>STR:{character.str} </Text>
          <Text style={styles.statString}>DEX:{character.dex} </Text>
          <Text style={styles.statString}>INT:{character.int} </Text>
          <Text style={styles.statString}>CHA:{character.cha} </Text>
        </View>
        <HPBar max={100} current={26} />
        <Text style={styles.charNameString}>{character.name}</Text>
      </PlayerCard>
    ));
    return (
      <View style={{ flex: 1 }}>
        {this.state.idle ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <WaitingIcon />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={R.colors.buttonColor} barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>{characters}</ScrollView>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('CreateCharacter', {
                  userData,
                });
              }}
            >
              <Image source={R.images.Button} style={styles.buttonImage} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
