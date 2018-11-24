import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Image } from "react-native";
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
    IconNB
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

const GET_NURSING_HOME_BRANCHES = gql`
              query Nursinghome($idNumber:  ID!) {
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
            `;

function BranchesList(props) {

    const branches = props.branches;
    const listItems = branches.map((branch) =>

        <Card style={styles.mb}>
            <CardItem cardBody>
                <Image
                    style={{
                        resizeMode: "cover",
                        width: null,
                        height: 200,
                        flex: 1
                    }}
                    source={cardImage}
                />
            </CardItem>
            <CardItem>
                <Body>
                <Text>
                   Dirección: { branch.address }
                </Text>
                <Text>
                   Número habitaciones: { branch.total_rooms }
                </Text>
                <Text>
                   Habitaciones disponibles: { branch.available_rooms }
                </Text>
                </Body>
            </CardItem>
        </Card>
    );
    return (
        listItems
    );
}

const Nursinghomebranches = ({ idNumber }) => (
    <Query query={GET_NURSING_HOME_BRANCHES} variables={{ idNumber }}>
        {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error!: ${error}`;

            return (

                <ListItem thumbnail>
                    <Left>
                        <Thumbnail square  />
                    </Left>
                    <Body>
                    <Text>
                        {data.nursinghome.name}
                    </Text>
                    <Text numberOfLines={1} note>
                        {data.nursinghome.idnursinghome}
                    </Text>
                    </Body>
                </ListItem>,
                <BranchesList branches={data.nursinghome.branches} />
            );
        }}
    </Query>
);


class NursingHome extends Component{
    render(){
        return(
            <Nursinghomebranches idNumber = {1} />

        )
    }
}

export default NursingHome;
