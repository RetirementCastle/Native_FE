import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';

import Home from "../../screens/home/";
import deviceStorage from "../../services/deviceStorage";
import axios from "axios/index";

const datas = [
    {
        route: "Home",
        text: "Login"
    }
];
class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            loading: false,
            navigation: this.props.navigation,
          //  newJWT: this.props.newJWT
        };

        this.loginUser = this.loginUser.bind(this);
    }

    loginUser() {
        const { username, password } = this.state;

        this.setState({ error: '', loading: true });

        // NOTE Post to HTTPS only in production
        axios.post("http://35.199.81.116:8005/api-token-auth/",{
            username: username,
            password: password
        })
            .then((response) => {

                deviceStorage.saveKey("id_token", response.data.token);
                   // this.state.newJWT(response.data.token);
                    this.state.navigation.navigate(datas[0].route);
                Alert.alert(
                    'Accepted',
                    "Bienvenido",
                    [
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
            })
            .catch((error) => {
                console.log(error);
                Alert.alert(
                    'Error',
                    "Wrong",
                    [
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
            });
    }
    render(){
        const { username, password, error, loading } = this.state;
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input}
                           autoCapitalize="none"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           autoCorrect={false}
                           keyboardType='email-address'
                           returnKeyType="next"
                           placeholder='Email or Mobile Num'
                           value={username}
                           onChangeText={username => this.setState({ username })}
                           placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input}
                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                           placeholder='Password'
                           value={password}
                           onChangeText={password => this.setState({ password })}
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           secureTextEntry/>
                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} />
                <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.state.navigation.navigate(datas[0].route)}> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={this.loginUser}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton:{
        backgroundColor:  '#2980b6',
        color: '#fff'
    }

});


export default LoginForm;
