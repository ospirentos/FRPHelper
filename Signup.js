import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import backgroundImage from "./static/background3.jpg"

import conparam from './connectionparams'

import hash from 'hash.js'

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    SendSignup = () => {
        signupCredentals = {
            username: this.state.username,
            password: hash.sha256().update(this.state.password).digest('hex')
        }
        fetch(conparam.connectionIP + '/api/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupCredentals),
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            if (result.successfull === "true") {
                console.log('Signup Successfull!')
                this.props.navigation.navigate('Login');
            } else {
                console.log('Failed to Signup!')
                Alert.alert(
                    'Signup Failed',
                    result.message,
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                  );
            }
        })

    }

    handleLogin = () => {
        const { navigate } = this.props.navigation;
        navigate('Login');
    }

    render() {
        const bgSize = { height: wp(70) * 1.9 }
        const styleBg = StyleSheet.flatten([styles.formContainer, bgSize]);
        return (
            <ImageBackground style={styles.background} source={backgroundImage}>
                <ImageBackground style={styleBg} source={require('./static/parchmentBg.png')}>
                    <Text style={styles.header}>Signup</Text>
                    <TextInput
                        style={styles.inputbox}
                        placeholder='Username'
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <TextInput
                        style={styles.inputbox}
                        placeholder='Password'
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.submitButton} onPress={this.SendSignup}>
                        <Text>Signup!</Text>
                    </TouchableOpacity>
                    <Text style={styles.signupText} onPress={this.handleLogin}>Login</Text>
                </ImageBackground>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    formContainer: {
        width: wp(70),
        alignItems: "center"

    },
    header: {
        fontSize: 40,
        marginTop: hp(15),
        marginBottom: hp(8)
    },
    inputbox: {
        width: wp(50),
        height: hp(4),
        borderWidth: 1,
        margin: hp(2),
        padding: hp(0),
        paddingLeft: wp(3)
    },
    submitButton: {
        width: wp(30),
        height: hp(5),
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    signupText: {
        fontSize: 15,
        marginTop: 20
    }
});