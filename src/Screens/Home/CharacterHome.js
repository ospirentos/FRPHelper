import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PlayerCard from './PlayerCard';
import HPBar from './HPBar';

const styles = StyleSheet.create({
  statContainer: {
    flexDirection: 'row',
  },
  statString: {
    marginRight: 10,
  },
  charNameString: {
    marginTop: 10,
  },
});

export default class CharacterHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      str: '',
      dex: '',
      int: '',
      cha: '',
      error: false,
    };
  }

  componentDidMount() {
    const data = this.props.navigation.getParam('data', 'none');
    if (data !== 'none') {
      this.setState({
        name: data.name,
        str: data.str,
        dex: data.dex,
        int: data.int,
        cha: data.cha,
      });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <PlayerCard>
          <View style={styles.statContainer}>
            <Text style={styles.statString}>STR:{this.state.str} </Text>
            <Text style={styles.statString}>DEX:{this.state.dex} </Text>
            <Text style={styles.statString}>INT:{this.state.int} </Text>
            <Text style={styles.statString}>CHA:{this.state.cha} </Text>
          </View>
          <HPBar max={100} current={26} />
          <Text style={styles.charNameString}>{this.state.name}</Text>
        </PlayerCard>
      </View>
    );
  }
}
