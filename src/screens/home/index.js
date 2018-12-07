import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Header, Left, Icon, Body, Right, Title } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            navigation: this.props.navigation,
            deleteJWT: this.props.deleteJWT
        };

    }
  render() {
    return (
      <Container>
          <View style={{ marginBottom: 80 }}>
              <Header
                  style={{ backgroundColor: "#2c3e50" }}>
                  <Left>
                      <Button
                          transparent
                          onPress={() => this.state.navigation.navigate("DrawerOpen")}
                      >
                          <Icon name="menu" />
                      </Button>
                  </Left>
                  <Body>
                  <Title>Menu</Title>
                  </Body>
                  <Right>
                      <Button
                          hasText
                          transparent
                          onPress={this.state.deleteJWT}
                      >
                          <Text>Logout</Text>
                      </Button>
                  </Right>
              </Header>
          </View>
      </Container>
    );
  }
}

export default Home;
