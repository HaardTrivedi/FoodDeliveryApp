import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TextInput, Switch } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';

type Props = {};
export default class Restaurants extends React.Component {
    render() {
        return (
            <Body>
                <Title>Restaurant List</Title>
                <Button
                    onPress={() => this.props.navigation.navigate('./HomeScreen/HomeScreen.js')}
                    title="McDonald's" 
                />
            </Body>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 125,
        height: 125
    },
})

