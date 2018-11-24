import React, { Component } from "react";
import { Image } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import NursingHomes from './NursingHomes';
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
    Fab,
    Right,
    IconNB
} from "native-base";
import styles from "./styles";
import NursingHomeCreate from "./register";
const datas = [
    {
        route: "NursingHomeCreate",
        text: "Nuevo"
    },
    {
        route: "NursingHomeShow",
        text: "Editar"
    }
];

const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");

const client = new ApolloClient({
    uri: "http://35.199.81.116:4000/graphql"
});

class NursingHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Casa Gediatricas</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>

                    <ApolloProvider client={client}>
                        <NursingHomes />
                    </ApolloProvider>

                </Content>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: "#5067FF" }}
                    position="bottomRight"
                    onPress = {() => this.props.navigation.navigate(datas[0].route)}
                >
                    <IconNB name="md-share" />
                </Fab>
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
            </Container>
        );
    }
}

export default NursingHome;
