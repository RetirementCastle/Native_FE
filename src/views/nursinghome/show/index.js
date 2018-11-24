import React, { Component } from "react";
import { Image } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import NursingHome from './NursingHome';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Thumbnail,
    Left,
    Body,
    Right,
    Fab,
    IconNB
} from "native-base";
import styles from "./styles";

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

const logo = require("../../../../assets/logo.png");
const cardImage = require("../../../../assets/drawer-cover.png");

const client = new ApolloClient({
    uri: "http://35.199.81.116:4000/graphql"
});


class NursingHomeShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

        render() {
        const RegisterTest = this.props.navigation.state.params.RegisterTest;
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Nursinghome</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>
                    <ApolloProvider client={client}>
                        <NursingHome nursinghomeRegister = {RegisterTest} />
                    </ApolloProvider>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: "#5067FF" }}
                        position="bottomLeft"
                        onPress = {() => this.props.navigation.navigate(datas[1].route, { RegisterTest: 1 })}
                    >
                        <IconNB name="md-share" />
                    </Fab>
                </Content>
            </Container>
        );
    }
}

export default NursingHomeShow;
