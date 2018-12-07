import React, { Component } from 'react';
import { Loading } from './components/common/';
import Auth from './Auth';
import LoggedIn from './LoggedIn';

export default class JWT_Index extends Component {
    constructor() {
        super();
        this.state = {
            jwt: '',
        }
    }

    render() {
        if (!this.state.jwt) {
            return (
                <Auth />
            );
        } else if (this.state.jwt) {
            return (
                <LoggedIn />
            );
        }
    }
}
