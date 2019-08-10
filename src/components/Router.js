import React, { Component } from 'react';

import GetUserData from '../Screens/Login/Components/GetUserData'

export default class Router extends Component {
    componentDidMount() {
        const userData = GetUserData(props.navigation.getParam('username', 'none'));
        console.log(userData);
    }
} 