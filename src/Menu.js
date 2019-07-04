import React, { Component } from 'react';
import { Platform, ToastAndroid, Button, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Card, CardItem, Content, Header, Left, Body, Right, Title } from 'native-base';
import {Button as ButtonE} from "react-native-elements";
import Modal from './CartModal'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            items: [],
            prices: [],
            quantities: [],
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    static navigationOptions = ({ navigation }) => {
        return {
        title: 'Menu',
        headerRight:(<View style={{paddingRight:10}}><Icon.Button
        name="shopping-cart"
        backgroundColor = "darkred"
        style={{paddingLeft:20}}
        onPress={()=>navigation.navigate("Cart")}
      /></View>)
      };
    }

    showToast = () => {
        ToastAndroid.show(
            'Item Added to Cart',
            ToastAndroid.SHORT,
          );
    }

    addItems = (id, price) => {
        var flag = false
        global.cart.forEach(item => {
            if (item.name == id){
                flag = true
                item.num += 1
            }
        });
        if (!flag){
            global.cart.push({name:id,price:price,num:1})
        }
        this.showToast()
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Container>
                    <View style={styles.foodItem}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Text style={styles.restaurantText}> Cheeseburger </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> $4.50 </Text>
                            </View>
                        </View>
                        <Button
                            title='Add to Cart'
                            style={styles.btnAddToCart}
                            color='grey'
                            onPress={() => {this.addItems("Cheeseburger", "4.5")}}
                        />
                    </View>

                    <View style={styles.foodItem}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Text style={styles.restaurantText}> Junior Chicken </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> $4.95 </Text>
                            </View>
                        </View>
                        <Button
                            title='Add to Cart'
                            style={{
                                justifyContent: 'stretch',
                                alignItems: 'center',
                                alignSelf: 'center',
                                paddingTop: 10
                            }}
                            color='grey'
                            onPress={() => {this.addItems("Junior Chicken", "4.95")}}
                        />
                    </View>
                    <View style={styles.foodItem}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Text style={styles.restaurantText}> Fries </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> $2.00 </Text>
                            </View>
                        </View>
                        <Button
                            title='Add to Cart'
                            style={styles.btnAddToCart}
                            color='grey'
                            onPress={() => {this.addItems("Fries", "2")}}
                        />
                    </View>
                    <View style={styles.foodItem}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Text style={styles.restaurantText}> Drink </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> $1.99 </Text>
                            </View>
                        </View>
                        <Button
                            title='Add to Cart'
                            style={styles.btnAddToCart}
                            color='grey'
                            onPress={() => {this.addItems("Drink", "1.99")}}
                        />
                    </View>
                    <View style={styles.foodItem}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Text style={styles.restaurantText}> Apple Pie </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> $1.29 </Text>
                            </View>
                        </View>
                        <Button
                            title='Add to Cart'
                            style={styles.btnAddToCart}
                            color='grey'
                            onPress={() => {this.addItems("Apple Pie", "1.29")}}
                        />
                    </View>
                    <View style={styles.foodItem}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Text style={styles.restaurantText}> Chicken Nuggets </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> $2.99 </Text>
                            </View>
                        </View>
                        <Button
                            title='Add to Cart'
                            style={styles.btnAddToCart}
                            color='grey'
                            onPress={() => {this.addItems("Chicken Nuggets", "2.99")}}
                        />
                    </View>
                </Container>
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    Here's some content for the modal
                </Modal>
            </ScrollView>
        );
    }
}


