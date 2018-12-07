import React, {Component} from "react";
const shweta = require("../../../assets/contacts/shweta.png");
import { Image } from "react-native";
import gql from "graphql-tag";
import NursingHomeShow from "./show";
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
    Right
} from "native-base";
import styles from "./styles";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const cardImage = require("../../../assets/drawer-cover.png");

const client = new ApolloClient({
    uri: "http://35.199.81.116/graphql"
});

const datas = [
    {
        route: "NursingHomeShow",
        text: "Nuevo"
    }
];
    function remove(props, index) {
    const DELETE_USER_MUTATION = gql`
          mutation deleteNursinghome($idNumber: ID!) {
            deleteNursinghome(idNumber: $idNumber)
          }
        `;
    //const deletePoints = gql`mutation deleteNursinghome($id: Int) { deleteNursinghome(idNumber: $id) }`;

    client.mutate({
        mutation: DELETE_USER_MUTATION,
        variables: {idNumber: props.nursinghome.idnursinghome}
    });
}

function routethis(props, index) {
    this.props.navigation.navigate('MyProfil');
}

class NursingHome extends Component {
    constructor(props) {
        super(props);

    }

    render() {
    return (

        <ListItem thumbnail>
            <Left>
                <Thumbnail square  />
            </Left>
            <Body>
            <Text>
                {this.props.nursinghome.name}
            </Text>
            <Text numberOfLines={1} note>
                {this.props.nursinghome.idnursinghome}
            </Text>
            </Body>
            <Right>
                <Button  style={{ backgroundColor: "#2c3e50" }}
                        onPress = {() => remove(this.props)}>
                    <Text>Borrar</Text>
                </Button>
            </Right>
        </ListItem>

);

}
}

export default NursingHome;
