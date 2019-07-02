import React, { Component } from 'react';
import { Platform, Button, StyleSheet, Text, View, ScrollView, Image, TextInput, Switch } from 'react-native';
import { Container, Card, CardItem, Content, Icon, Header, Left, Body, Right, TTitle } from 'native-base';
import styles from "./styles"

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Restaurants',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <View style={styles.buttons}>
                    <Button
                        title="McDonald's"
                        color="darkred"
                        style={styles.buttons}
                        onPress={() => { navigate('Menu') }}>
                    </Button>
                </View>
            </Container>
        );
    }
}


