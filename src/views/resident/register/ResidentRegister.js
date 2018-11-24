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

class ResidentRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            birth_date: '',
            admission_date: '',
            gender: '',
            state: '',
            contact_name: '',
            contact_phone: '',
            diseases: '',
            isLoading: false
        }
    }
    createResident = async () => {
        this.setState({ isLoading: true})
        const { name,
                birth_date,
                admission_date,
                gender,
                state,
                contact_name,
                contact_phone,
                diseases
                } = this.state
        let ret = await this.props.createResidentMutation({
            variables: {
                name,
                birth_date,
                admission_date,
                gender,
                state,
                contact_name,
                contact_phone,
                diseases
            }
        })
        this.setState({ isLoading: false,
            name: '',
            birth_date: '',
            admission_date: '',
            gender: '',
            state: '',
            contact_name: '',
            contact_phone: '',
            diseases: ''})
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
                <Text style={styles.label}>
                    Ingrese la fecha de nacimiento
                </Text>
                <TextInput
                    style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1,  borderRadius: 10, margin: 10, alignSelf: "center"}}
                    underlineColorAndroid={"transparent"}
                    onChangeText={(birth_date) => this.setState({birth_date})}
                    value={this.state.birth_date}
                />
                <Text style={styles.label}>
                    Ingrese la fecha de admisión
                </Text>
                <TextInput
                    style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1,  borderRadius: 10, margin: 10, alignSelf: "center"}}
                    underlineColorAndroid={"transparent"}
                    onChangeText={(admission_date) => this.setState({admission_date})}
                    value={this.state.admission_date}
                />
                <Text style={styles.label}>
                    Ingrese el genero
                </Text>
                <TextInput
                    style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1,  borderRadius: 10, margin: 10, alignSelf: "center"}}
                    underlineColorAndroid={"transparent"}
                    onChangeText={(gender) => this.setState({gender})}
                    value={this.state.gender}
                />
                <Text style={styles.label}>
                    Ingrese el estado
                </Text>
                <TextInput
                    style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1,  borderRadius: 10, margin: 10, alignSelf: "center"}}
                    underlineColorAndroid={"transparent"}
                    onChangeText={(state) => this.setState({state})}
                    value={this.state.state}
                />
                <Text style={styles.label}>
                    Ingrese el nombre de contacto
                </Text>
                <TextInput
                    style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1,  borderRadius: 10, margin: 10, alignSelf: "center"}}
                    underlineColorAndroid={"transparent"}
                    onChangeText={(contact_name) => this.setState({contact_name})}
                    value={this.state.contact_name}
                />
                <Text style={styles.label}>
                    Ingrese el numero de teléfono del contacto
                </Text>
                <TextInput
                    style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1,  borderRadius: 10, margin: 10, alignSelf: "center"}}
                    underlineColorAndroid={"transparent"}
                    onChangeText={(contact_phone) => this.setState({contact_phone})}
                    value={this.state.contact_phone}
                />
                <Text style={styles.label}>
                    Ingrese las enfermedades que presenta
                </Text>
                <TextInput
                    style={{height: 40,width: 400, borderColor: 'gray', borderWidth: 1,  borderRadius: 10, margin: 10, alignSelf: "center"}}
                    underlineColorAndroid={"transparent"}
                    onChangeText={(diseases) => this.setState({diseases})}
                    value={this.state.diseases}
                />
                { this.state.isLoading ? ( <ActivityIndicator styleAttr='Large'/> ) : (<Button
                    onPress={() => this.createResident()}
                    title="Crear"
                    color="#841584"
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
        backgroundColor: '#F5FCFF',
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
const CREATE_RESIDENT_MUTATION = gql`
    mutation newResident($name: String!, 
                         $birth_date: String!, 
                         $admission_date: String!, 
                         $gender: String!, 
                         $state: String!, 
                         $contact_name: String!, 
                         $contact_phone: Int, 
                         $diseases: String!) {
  	            newResident(name: $name
    						birth_date: $birth_date
    						admission_date: $admission_date
    						gender: $gender
    						state: $state
    						contact_name: $contact_name
    						contact_phone: $contact_phone
    						diseases: $diseases){
                   _id
              }
       }
`

export default graphql(CREATE_RESIDENT_MUTATION, { name: 'createResidentMutation' })(ResidentRegister)
