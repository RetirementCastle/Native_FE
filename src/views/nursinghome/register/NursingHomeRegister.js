import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ActivityIndicator
} from 'react-native';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';

class NursingHomeRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            isLoading: false
        }
    }
    createNursingHome = async () => {
        this.setState({ isLoading: true})
        const { name } = this.state
        let ret = await this.props.createNursinghomeMutation({
            variables: {
                name
            }
        })
        this.setState({ isLoading: false, name: ''})
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.label}>
                    Ingrese el nombre
                </Text>
                <TextInput
                    style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1,  borderRadius: 10, margin: 10, alignSelf: "center"}}
                    underlineColorAndroid={"transparent"}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                { this.state.isLoading ? ( <ActivityIndicator styleAttr='Large'/> ) : (<Button
                    onPress={() => this.createNursingHome()}
                    title="Registrar"
                    color="#2c3e50"
                />)}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    label: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


//export default NursingHomeRegister;
const CREATE_NURSINGHOME_MUTATION = gql`
  mutation newNursinghome($name: String) {
      newNursinghome(name: $name) {
        idnursinghome
        name
      }
    }
`

export default graphql(CREATE_NURSINGHOME_MUTATION, { name: 'createNursinghomeMutation' })(NursingHomeRegister)
