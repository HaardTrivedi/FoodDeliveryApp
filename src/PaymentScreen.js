import React, { Component } from 'react';
import { Platform, TextInput, Button, StyleSheet, Text, View, ScrollView, Image, Modal, TouchableOpacity, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import { Container, Card, CardItem, Content, Icon, Header, Left, Body, Right, Title } from 'native-base';
import styles from "./styles.js"
function generateItems(navigation) {
    var items = [];
    const itemIn = navigation.getParam('item', []);
    const priceIn = navigation.getParam('price', []);
    const quantityIn = navigation.getParam('quantity', []);
    for (var i = 0; i < itemIn.length; i++) {
        items.push(<CartItem item={itemIn[i]} quantity={quantityIn[i]} price={priceIn[i]} />)
    }
    return items;
}
export default class HomeScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            cardNumber: '',
            expDate: '',
            cvc: '',
            couponCode: '',
        }
    }

    static navigationOptions = {
        title: 'Pay',
    };
    showToast(text){
        ToastAndroid.show(
            text,
            ToastAndroid.SHORT,
          );
    }
    verifyExp(){
        if (this.state.cardNumber.length < 12){
            this.showToast("Card number too short")
        }
        else if (this.state.expDate.length <4){
            this.showToast("Expiry date too short")
        }
        else if (this.state.cvc.length<3){
            this.showToast("CVC too short")
        }
        else{
            var month = this.state.expDate.slice(0,2)

            if (month>12){
                this.showToast("Month too large")
            }
            else{
                global.cart = [];
                return true;
            }
        }
        return false;
    }
    render() {

        const { navigate } = this.props.navigation;
        return (
            <Container>
                <KeyboardAvoidingView behavior="padding">
                <View><Image source={require('../images/logo_pay.png')}/></View>

                <Text style={styles.payText}>CARD NUMBER</Text>
                <View style={styles.payInput}>
                    <TextInput
                        onChangeText={(text) => this.setState({ cardNumber: text })}
                        value={this.state.cardNumber}
                        placeholder={"Valid Card Number"}
                        maxLength={19}
                        keyboardType={"number-pad"}
                    />
                </View>


                <Text style={styles.payText}>EXPIRATION DATE</Text>
                <View style={styles.payInput}>
                    <TextInput
                        onChangeText={(text) => this.setState({expDate:text})}
                        value={this.state.expDate}
                        placeholder={"MM/YY"}
                        maxLength={4}
                        keyboardType={"number-pad"}
                    />
                </View>

                <Text style={styles.payText}>CVC CODE</Text>
                <View style={styles.payInput}>
                    <TextInput
                        onChangeText={(text) => this.setState({ cvc: text })}
                        value={this.state.cvc}
                        placeholder={"CVC"}
                        maxLength={4}
                        keyboardType={"number-pad"}
                    />
                </View>


                <Text style={styles.payText}>COUPON CODE</Text>
                <View style={styles.payInput}>
                    <TextInput
                        onChangeText={(text) => this.setState({ couponCode: text })}
                        value={this.state.couponCode}
                    />
                </View>

                <Button
                    title='Pay'
                    style={styles.btnAddToCart}
                    color='green'
                    onPress={() => {if (this.verifyExp())navigate('Home');}}
                />
                </KeyboardAvoidingView>
            </Container>
        );
    }
}
