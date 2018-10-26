import React from 'react';
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
    <List
        <ListItem>
            <Left>
                <Thumbnail   />
            </Left>
            <Body>
            <Text>
                {props.resident.contact_name}
            </Text>
            <Text >
                {props.resident.total_amount}
            </Text>
            </Body>
            <Right>
                <Button transparent>
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
        />
    );

export default Resident;
