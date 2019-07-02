import React, { Component } from 'react';
import { Platform, Button, StyleSheet, Text, View, ScrollView, Image, TextInput, Switch } from 'react-native';
import { Container, Card, CardItem, Content, Icon, Header, Left, Body, Right, Title } from 'native-base';

export default class HomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
          items: ["a", "b"],
          prices: ["3", "4.65"],
          quantities: ["2", "3"]
        }
      }

    static navigationOptions = {
        title: 'Menu',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <View style={styles.buttons}>
                    <Button
                        title="Fries"
                        color="darkred"
                        style={styles.buttons}
                        onPress= {()=>{navigate('Cart', {item:this.state.items, price:this.state.prices, quantity:this.state.quantities})}}
                    ></Button>

                </View>
            </Container>
        );
    }
}


