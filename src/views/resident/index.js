import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Residents from './Residents';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Body,
    Fab,
    Right,
    IconNB
} from "native-base";
import styles from "./styles";
import ResidentCreate from "./register";

const datas = [
    {
        route: "ResidentCreate",
        text: "Nuevo"
    },
    {
        route: "NursingHomeShow",
        text: "Editar"
    }
];
const client = new ApolloClient({
    uri: "http://35.199.81.116/graphql"
});

class Resident extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: "#2c3e50" }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Residentes</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <ApolloProvider client={client}>
                        <Residents />
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
            </Container>
        );
    }
}

export default Resident;
