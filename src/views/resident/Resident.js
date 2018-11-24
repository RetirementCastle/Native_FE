import React from 'react';
const shweta = require("../../../assets/contacts/shweta.png");
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

const Resident = (props) => (
    <ListItem thumbnail>
        <Left>
            <Thumbnail square source={shweta} />
        </Left>
        <Body>
        <Text>
            {props.resident.name}
        </Text>
        <Text numberOfLines={1} note>
        {props.resident._id}
        </Text>
        </Body>
        <Right>
            <Button transparent>
                <Text>View</Text>
                </Button>
        </Right>
    </ListItem>
);

export default Resident;
