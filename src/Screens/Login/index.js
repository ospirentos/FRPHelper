/*
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import R from '../../res/R'

import LoginWithToken from './Components/LoginWithToken'
import PostLoginInfo from './Components/PostLoginInfo'
import GetUserData from './Components/GetUserData'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            tokenLogin: true
        }
    }

    componentDidMount() {
        if (LoginWithToken()) {
            const userData = GetUserData(this.state.username);
            console.log(userData);
        } else {
            this.setState({
                tokenLogin: LoginWithToken()
            });
            console.log('Still this!')
        }
    }

    handleSignup = () => {
        console.log('OmegaOmegaOmegaFallen')
    }

    render() {
        const bgSize = { height: wp(70) * 1.9 }
        const styleBg = StyleSheet.flatten([styles.formContainer, bgSize]);
        if (this.state.token) {
            return (
                <ImageBackground style={styles.background} source={R.images.background}>
                    <ImageBackground style={styleBg} source={R.images.loginContainerBackground}></ImageBackground>
                </ImageBackground>
            );
        } else {
            return (
                <ImageBackground style={styles.background} source={R.images.background}>
                    <ImageBackground style={styleBg} source={R.images.loginContainerBackground}>
                        <Text style={styles.header}>Login</Text>
                        <TextInput
                            style={styles.inputbox}
                            placeholder='Username'
                            onChangeText={(text) => this.setState({ username: text })}
                            value={this.state.username}
                        />
                        <TextInput
                            style={styles.inputbox}
                            placeholder='Password'
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                        />
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() =>
                                PostLoginInfo(
                                    this.state.username,
                                    this.state.password)}
                        >
                            <Text>Login!</Text>
                        </TouchableOpacity>
                        <Text
                            style={styles.signupText}
                            onPress={() => this.handleSignup}
                        >
                            Signup
                        </Text>
                    </ImageBackground>
                </ImageBackground>
            );
        }

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
*/