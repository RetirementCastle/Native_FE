import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
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

import Resident from './Resident';

const Residents = () => (
    <Query query={gql`
        {
          residents{
            name
            _id
            birth_date
          }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <Text>Loading ...</Text>;
            if (error) return <Text>Error :(</Text>;

            return data.residents.map((currentResident) => (
                <Resident resident={currentResident} />
            ));
        }}
    </Query>
);

export default Residents;
