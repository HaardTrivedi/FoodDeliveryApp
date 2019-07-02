import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TextInput, Switch } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';

type Props = {};
export default class Restaurants extends Component<Props> {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Menu</Title>
                        <Button id='mcdonalds'>Fries</Button>
                    </Body>
                </Header>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 125,
        height: 125
    },
})

