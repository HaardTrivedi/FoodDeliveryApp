import React from "react";
import { StatusBar, View, Picker, TextInput, Button } from "react-native";
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

function appendZero(num) {
    var strCombined = String(num).split(".");
    if (strCombined.length == 1) {
        strCombined.push("00");
    }
    else {
        if (strCombined[1].length < 2) {
            strCombined[1] += "0";
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
        var itemDetails = this.props.item + "($" + appendZero(this.props.price) + ") ";
        var combined = parseFloat(this.props.price) * this.props.quantity;
        combined = parseFloat(combined.toFixed(2));
        var itemTotal = "$" + appendZero(combined);
        return (
            <View style={styles.cartItem}>
                <View style={styles.cartItemDetails}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                        <Text style={styles.itemDetailsText}>
                            {itemDetails}
                        </Text>
                        <Text>{this.props.quantity}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                        <Button
                            title={"  -  "}
                            style={styles.btnCart}
                            color={"darkred"}
                            onPress={this.props.onRemove}
                        />
                        <Button
                            title={"Remove from Cart"}
                            style={styles.cartItemRemove}
                            color={"darkred"}
                            onPress={this.props.onPress}
                        />
                        <Button
                            title={"  +  "}
                            style={styles.btnCart}
                            color={"darkred"}
                            onPress={this.props.onAdd}
                        />
                    </View>
                </View>

                <View style={styles.cartItemCost}>
                    <Text style={styles.costText}>{itemTotal}</Text>
                </View>
            </View>
        )
    }
}