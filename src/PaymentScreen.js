import React, { Component } from 'react';
import { Platform, TextInput, Button, StyleSheet, Text, View, ScrollView, Image, Modal, TouchableOpacity } from 'react-native';
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
    render() {

        const { navigate } = this.props.navigation;
        return (
            <Container>
                <View><Image source={require('../images/logo_pay.png')}/></View>

                <Text style={styles.payText}>CARD NUMBER</Text>
                <View style={styles.payInput}>
                    <TextInput
                        onChangeText={(text) => this.setState({ cardNumber: text })}
                        value={this.state.cardNumber}
                        placeholder={"Valid Card Number"}
                    />
                </View>


                <Text style={styles.payText}>EXPIRATION DATE</Text>
                <View style={styles.payInput}>
                    <TextInput
                        onChangeText={(text) => this.setState({ expDate: text })}
                        value={this.state.expDate}
                        placeholder={"MMYY"}
                    />
                </View>

                <Text style={styles.payText}>CVC CODE</Text>
                <View style={styles.payInput}>
                    <TextInput
                        onChangeText={(text) => this.setState({ cvc: text })}
                        value={this.state.cvc}
                        placeholder={"CVC"}
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
                    onPress={() => { navigate('Home') }}
                />
            </Container>
        );
    }
}
