import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from "react";
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

const sankhadeep = require("../../../assets/contacts/sankhadeep.png");
const supriya = require("../../../assets/contacts/supriya.png");
const himanshu = require("../../../assets/contacts/himanshu.png");
const shweta = require("../../../assets/contacts/shweta.png");
const shruti = require("../../../assets/contacts/shruti.png");
const shivraj = require("../../../assets/contacts/shivraj.png");
const datas = [
    {
        img: sankhadeep,
        text: "Sankhadeep",
        note: "Its time to build a difference . ."
    },
    {
        img: supriya,
        text: "Supriya",
        note: "One needs courage to be happy and smiling all time . . "
    },
    {
        img: shivraj,
        text: "Shivraj",
        note: "Time changes everything . ."
    },
    {
        img: shruti,
        text: "Shruti",
        note: "The biggest risk is a missed opportunity !!"
    },
    {
        img: himanshu,
        text: "Himanshu",
        note: "Live a life style that matchs your vision"
    },
    {
        img: shweta,
        text: "Shweta",
        note: "Failure is temporary, giving up makes it permanent"
    }
];

class Resident extends Component {
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
                    <Title>List Thumbnail</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

                    <Query query={gql`
                        {
                            transactions{
                                id
                                total_amount
                                contact_name
                            }
                        }
    `}
                    >
                        {({loading, error, data}) => {
                            if (loading) return <p>Loading ...</p>;
                            if (error) return <p>Error :(</p>;

                            return data.transactions.map((currentResident) => (
                                <Resident course={currentResident} />
                            ));
                        }}
                    </Query>

                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={data.img} />
                                </Left>
                                <Body>
                                <Text>
                                    {data.text}
                                </Text>
                                <Text numberOfLines={1} note>
                                    {data.note}
                                </Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}

export default Resident;

