import React from "react";
import { StatusBar, View, Picker, TextInput, Button} from "react-native";
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button as ButtonNB
} from "native-base";
import styles from "../styles"
import { CheckBox } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
        emptyCart: "No items added",
    }
 }
 
 static navigationOptions = {
    title: 'Cart',
  };
  render() {
    return (
      <Container>
        {/* <Header style = {{backgroundColor: "darkred"}}>
          <Left>
            <ButtonNB
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </ButtonNB>
          </Left>
          <Body>
            <Title>Cart</Title>
          </Body>
          <Right />
        </Header> */}
        <Text style = {{textAlign:"center"}}>
            {this.state.emptyCart}
        </Text>
      </Container>
    );
  }
}
