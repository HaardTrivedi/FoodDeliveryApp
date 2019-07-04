import React from "react";
import { StatusBar, View, Picker, TextInput, Button, ScrollView} from "react-native";
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
import { NavigationEvents } from "react-navigation";


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

// function generateItems(){
//     var items = [];
//     global.cart.forEach(item => {
//         var combined = parseFloat(item.price)*item.num;
//         combined = parseFloat(combined.toFixed(2));
//         items.push(<CartItem item = {item.name} quantity = {item.num} price = {item.price} onPress = {()=>removeItem(item.name)}/>)
//     });
//     return items;
// }
export default class HomeScreen extends React.Component {
  constructor() {
    super()
    var temp = this.generateItems()
    this.state = {
        total:temp[1],
        items:temp[0]
    }
 }
 
 static navigationOptions = {
    title: 'Cart',
  };
removeItem(id){
  for( var i = 0; i < global.cart.length; i++){ 
    if ( global.cart[i].name == id) {
      global.cart.splice(i, 1); 
    }
 }
 var temp = this.generateItems()
 this.setState({items:temp[0]})
 this.setState({total:temp[1]})
}
generateItems = ()=>{
  var items = [];
  var total = 0
  global.cart.forEach(item => {
      var combined = parseFloat(item.price)*item.num;
      combined = parseFloat(combined.toFixed(2));
      total+=combined;
      items.push(<CartItem item = {item.name} quantity = {item.num} price = {item.price} onPress = {()=>this.removeItem(item.name)}/>)
  });
  return [items,appendZero(total.toFixed(2))];
}

  render() {
      
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ScrollView>
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
        {this.state.items}
        <View style = {styles.cartItem}>
            <View style = {styles.cartItemDetails}>
                <Text style = {styles.itemDetailsText}>
                    Total
                </Text>
            </View>
            <View style = {styles.cartItemCost}>
                <Text style = {styles.costText}>{this.state.total}</Text>
            </View>
        </View>
        <View style = {{paddingTop:9}}>
        <Button title = {"Checkout"} color = {"darkred"} onPress = {()=>{navigate("Payment")}}/>
        </View> 
        </ScrollView>
      </Container>
    );
  }
}
