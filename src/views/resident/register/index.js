import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ResidentRegister from './ResidentRegister';
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

const datas = [
    {
        route: "NHBasicList",
        text: "Basic List"
    }
];

const client = new ApolloClient({
    uri: "http://35.199.81.116:4000/graphql"
});

class CreateResident extends Component {
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
                    <Title>Resident</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <ApolloProvider client={client}>
                        <ResidentRegister />
                    </ApolloProvider>

                </Content>
            </Container>
        );
    }
}

export default CreateResident;
