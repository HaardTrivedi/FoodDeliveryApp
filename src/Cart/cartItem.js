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
    strCombined = strCombined[0] + "." + strCombined[1];
    return strCombined;
}
export default class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }
   render() {
       var itemDetails = this.props.item + ": $" + appendZero(this.props.price) + " x " + this.props.quantity;
       var combined = parseFloat(this.props.price)*this.props.quantity;
        combined = parseFloat(combined.toFixed(2));
        var itemTotal = "$"+appendZero(combined);
    return (
      <View style = {styles.cartItem}>
            <View style = {styles.cartItemDetails}>
                <Text style = {styles.itemDetailsText}>
                    {itemDetails}
                </Text>
                <View  style = {styles.cartItemRemove}>
                    <Button title = {"Remove"} color = {"darkred"}/>
                </View>
            </View>
            <View style = {styles.cartItemCost}>
                <Text style = {styles.costText}>{itemTotal}</Text>
            </View>
        </View>
    )
   }
 }