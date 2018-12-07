import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Login from './Login';
import deviceStorage from '../../services/deviceStorage';
import Home from "../../screens/home";
import { Loading } from '../components/common';
class Auth extends Component{
    constructor() {
        super();
        this.state = {
            jwt: '',
            loading: true
        }

        this.newJWT = this.newJWT.bind(this);
        this.deleteJWT = deviceStorage.deleteJWT.bind(this);
        this.loadJWT = deviceStorage.loadJWT.bind(this);
        this.loadJWT();
    }

    newJWT(jwt){
        this.setState({
            jwt: jwt
        });
    }
    render(){
        if (this.state.loading) {
            return (
                <View style={styles.container}>
                <Loading size={'large'} />
                </View>
            );
        } else if (!this.state.jwt) {
            return (
                <View style={styles.container}>
                    <Login navigation={this.props.navigation} newJWT={this.newJWT} />
                </View>
            );
        } else if (this.state.jwt) {
            return (
                <View style={styles.container}>
                    <Home navigation={this.props.navigation} deleteJWT={this.deleteJWT} />
                </View>
            );
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
export default Auth;
