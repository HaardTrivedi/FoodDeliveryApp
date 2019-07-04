import React, { Component } from 'react';
import { Platform, Button, StyleSheet, Text, View, ScrollView, Image, Modal, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import styles from "./styles"
import Icon from "react-native-vector-icons/MaterialIcons"
export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
        title: 'Home',
        headerRight:(<View style={{paddingRight:10}}><Icon.Button
        name="shopping-cart"
        backgroundColor = "darkred"
        style={{paddingLeft:20}}
        onPress={()=>navigation.navigate("Cart")}
      /></View>)
      };
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (

            <Container>
                <ScrollView>
                    {/*                     <Button
                        title="McDonald's"
                        titleStyle={{ fontSize: 25 }}
                        color="darkred"
                        onPress={() => { navigate('Menu') }}
                    ></Button>
                    <Text style={styles.restaurantInfo}>Address</Text>
                    <Text style={styles.restaurantInfo}>Timing</Text> */}

                    <TouchableOpacity style={styles.buttons} onPress={() => { navigate('Menu') }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Image source={require('../images/logo_mcdonalds.png')} style={styles.logo} />
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> McDonald's </Text>
                                <Text style={styles.restaurantInfo}> 600 Cumberland Blvd </Text>
                                <Text style={styles.restaurantInfo}> 07:30-23:00 </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantInfo}> 3.7 </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => { navigate('Menu') }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Image source={require('../images/logo_subway.jpg')} style={styles.logo} />
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> Subway </Text>
                                <Text style={styles.restaurantInfo}> 120 Laurier Ave </Text>
                                <Text style={styles.restaurantInfo}> 10:00-21:00 </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantInfo}> 4.2 </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => { navigate('Menu') }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Image source={require('../images/logo_tims.jpg')} style={styles.logo} />
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> Tim Horton's </Text>
                                <Text style={styles.restaurantInfo}> 12 Marie Curie Pvt </Text>
                                <Text style={styles.restaurantInfo}> 11:00-03:00 </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantInfo}> 4.1 </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => { navigate('Menu') }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Image source={require('../images/logo_paramount.png')} style={styles.logo} />
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> Paramount </Text>
                                <Text style={styles.restaurantInfo}> 66 Rideau St </Text>
                                <Text style={styles.restaurantInfo}> 09:00-21:00 </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantInfo}> 4.5 </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => { navigate('Menu') }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Image source={require('../images/logo_dominos.png')} style={styles.logo} />
                            </View>
                            <View>
                                <Text style={styles.restaurantText}> Domino's </Text>
                                <Text style={styles.restaurantInfo}> 65 Laurier Ave </Text>
                                <Text style={styles.restaurantInfo}> 12:00-02:00 </Text>
                            </View>
                            <View>
                                <Text style={styles.restaurantInfo}> 4.6 </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </Container>
        );
    }
}


