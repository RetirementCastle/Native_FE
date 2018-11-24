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

import NursingHome from './NursingHome';

const NursingHomes = () => (
    <Query query={gql`
        {
          nursinghomes{
            name
            idnursinghome
          }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <Text>Loading ...</Text>;
            if (error) return <Text>Error :(</Text>;

            return data.nursinghomes.map((currentNursingHome) => (
                <NursingHome nursinghome={currentNursingHome} />
            ));
        }}
    </Query>

);

export default NursingHomes;
