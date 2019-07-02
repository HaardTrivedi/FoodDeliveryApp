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
import CartItem from "./cartItem.js"
function generateItems(navigation){
    var items = [];
    const itemIn = navigation.getParam('item', []);
    const priceIn = navigation.getParam('price', []);
    const quantityIn = navigation.getParam('quantity', []);
    for (var i = 0; i<itemIn.length; i++){
        items.push(<CartItem item = {itemIn[i]} quantity = {quantityIn[i]} price = {priceIn[i]}/>)
    }
    return items;
}
export default class HomeScreen extends React.Component {
    
  constructor() {
    super()
    this.state = {
        
    }
 }
 
 static navigationOptions = {
    title: 'Cart',
  };
  render() {
      
    const { navigation } = this.props;
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
        {generateItems(navigation)}
        <View style = {styles.cartItem}>
            <View style = {styles.cartItemDetails}>
                <Text style = {styles.itemDetailsText}>
                    Total
                </Text>
            </View>
            <View style = {styles.cartItemCost}>
                <Text style = {styles.costText}>Test</Text>
            </View>
        </View>
      </Container>
    );
  }
}
