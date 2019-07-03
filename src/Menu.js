import React, { Component } from 'react';
import { Platform, ToastAndroid, Button, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Card, CardItem, Content, Icon, Header, Left, Body, Right, Title } from 'native-base';
import Modal from './CartModal'

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

    static navigationOptions = {
        title: 'Menu',
    };

    showToast = () => {
        ToastAndroid.show(
            'Item Added to Cart',
            ToastAndroid.SHORT,
          );
    }

    addItems = () => {
        items
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
                            onPress={() => { navigate('Payment') }}
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


