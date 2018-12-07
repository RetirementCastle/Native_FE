import React, {Component} from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component{

    constructor() {
        super();
        this.state = {
            jwt: '',
            loading: true,
         //   newJWT: this.props.newJWT
        }
    }


    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo}  />

                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={this.props.navigation} newJWT={this.state.newJWT} />
                </View>


            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

export default Login;
