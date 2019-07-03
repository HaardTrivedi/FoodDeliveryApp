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

function appendZero(num){
    var strCombined = String(num).split(".");
    if (strCombined.length==1){
        strCombined.push("00");
    }
    else{
        if (strCombined[1].length<2){
            strCombined[1]+="0";
        }
    }
    strCombined = "$"+strCombined[0] + "." + strCombined[1];
    return strCombined;
}

function generateItems(navigation){
    var items = [];
    const itemIn = navigation.getParam('item', []);
    const priceIn = navigation.getParam('price', []);
    const quantityIn = navigation.getParam('quantity', []);
    var total = 0
    for (var i = 0; i<itemIn.length; i++){
        var combined = parseFloat(priceIn[i])*quantityIn[i];
        combined = parseFloat(combined.toFixed(2));
        total+=combined;
        items.push(<CartItem item = {itemIn[i]} quantity = {quantityIn[i]} price = {priceIn[i]} onPress = {removeItem(i)}/>)
    }
    return items;
}
export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
        total:0,
        items:[]
    }
 }
 
 static navigationOptions = {
    title: 'Cart',
  };
  calcTotal = (navigation)=>{
  const itemIn = navigation.getParam('item', []);
  const priceIn = navigation.getParam('price', []);
  const quantityIn = navigation.getParam('quantity', []);
  var total = 0
  for (var i = 0; i<itemIn.length; i++){
      var combined = parseFloat(priceIn[i])*quantityIn[i];
      combined = parseFloat(combined.toFixed(2));
      total+=combined;}
  return total;
}
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
                <Text style = {styles.costText}>{appendZero(this.calcTotal(navigation))}</Text>
            </View>
        </View>
      </Container>
    );
  }
}
