import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Image,
            TextInput } from "react-native";;
import { withApollo } from 'react-apollo';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    List,
    ListItem,
    Text,
    Thumbnail,
    Left,
    Body,
    Right,
    Card,
    CardItem,
    Separator,
    Fab,
    IconNB,
    View,
} from "native-base";
const datas = [
    {
        route: "NursingHomeCreate",
        text: "Nuevo"
    },
    {
        route: "NursingHomeEdit",
        text: "Editar"
    }
];

import styles from "./styles";
const cardImage = require("../../../../assets/drawer-cover.png");


class NursingHomeUpdate extends Component{
    constructor(props) {
        super(props)
        this.state={
            id: "",
            nursinghome:{
            }
        };
        this.runQ = this.runQ.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    runQ(){
        this.props.client.query({
            query: gql `
              query nursinghome($idNumber:  ID!) {
                  nursinghome(idNumber: $idNumber){
                    name
                    idnursinghome
                    branches{
                      idbranches
                      address
                      total_rooms
                      available_rooms
                    }
                  }
                }
           `,
            variables: {idNumber: this.state.id},
        })
            .then(result =>{
                this.setState({
                    nursinghome: result.data.nursinghome
                });
            });
    }
    onChange(event){
        this.setState({name: event.target.value});
    }


    render(){
        return(
            <View style={styles.container}>
                {this.state.data.map( (row, index) => (
                <Body>
                <TextInput value={row.name}
                           onChange={(e) => this.onChange(e)}/>
                </Body>
                    ))}
            </View>

        )
    }
}

export default withApollo(NursingHomeUpdate);
//export default NursingHomeUpdate;
