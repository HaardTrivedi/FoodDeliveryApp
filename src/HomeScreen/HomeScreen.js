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
  Right,
  Button as ButtonNB
} from "native-base";
import styles from "../styles"
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      city: 'Select...',
      search: "",
      breakfast: false,
      lunch: false,
      dinner: false,
      snacks: false,
      drinks: false,
      items: ["a", "b"],
      prices: ["3", "4.65"],
      quantities: ["2", "3"]
    }
  }

  static navigationOptions = ({ navigation, state }) => {
    return {
      title: 'Home',
      headerRight: (<View style={{ paddingRight: 10 }}><Icon.Button
        name="shopping-cart"
        backgroundColor="darkred"
        style={{ paddingLeft: 20 }}
        onPress={() => navigation.navigate("Cart")}
      /></View>)
    };
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <Container>
          {/* <Header style = {{backgroundColor: "darkred"}}>
          <Left>
            <ButtonNB
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </ButtonNB>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header> */}
          <View>
            <Text style={styles.welcome}>
              Order the Best Food to the Best School
          </Text>
            <Picker
              selectedValue={this.state.city}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}
              style={styles.dropDown}
              itemStyle={styles.welcome}
            >
              <Picker.Item label="Select..." value="-1" />
              <Picker.Item label="Ottawa" value="0" />
              <Picker.Item label="Toronto" value="1" />
              <Picker.Item label="Montreal" value="2" />
            </Picker>
            <View style={styles.textInput}>
              <TextInput
                onChangeText={(text) => this.setState({ search: text })}
                value={this.state.search}
                placeholder={"Search..."}
              />
            </View>
            <CheckBox
              title='Breakfast'
              checked={this.state.breakfast}
              onPress={() => { this.setState({ breakfast: !this.state.breakfast }) }}
            />
            <CheckBox
              title='Lunch'
              checked={this.state.lunch}
              onPress={() => { this.setState({ lunch: !this.state.lunch }) }}
            />
            <CheckBox
              title='Dinner'
              checked={this.state.dinner}
              onPress={() => { this.setState({ dinner: !this.state.dinner }) }}
            />
            <CheckBox
              title='Snacks'
              checked={this.state.snacks}
              onPress={() => { this.setState({ snacks: !this.state.snacks }) }}
            />
            <CheckBox
              title='Drinks'
              checked={this.state.drinks}
              onPress={() => { this.setState({ drinks: !this.state.drinks }) }}
            />
            <Button
              title="Search"
              color="darkred"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
              }}
              onPress={() => { navigate('Restaurants') }}
            />
          </View>
        </Container>
      </ScrollView>
    );
  }
}
