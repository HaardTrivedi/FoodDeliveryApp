import { StyleSheet, backgroundColor, marginHorizontal } from "react-native"
import { Button } from "react-native-elements";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  dropDown: {
    justifyContent: 'center',
  },
  textInput: {
    borderColor: "gray",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'gainsboro',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 125,
    height: 125
  },
  cartItem: {
    borderColor: "grey",
    borderTopWidth: 2,
    borderRadius: 5,
    marginBottom: 2,
    flexDirection: 'row',
  },
  cartTotal: {
    borderColor: "darkred",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    marginBottom: 2,
    flexDirection: 'row',
  },
  cartItemDetails: {
    flex: 3,
    borderRightWidth: 2,
    borderColor: "grey",
    marginTop: 5,
    marginBottom: 5
  },
  cartItemCost: {
    flex: 1,
    alignContent: "center",
    textAlign: 'center',
    justifyContent: "center",
  },
  cartItemRemove: {
    flexDirection: 'row',
    alignSelf: "center",
    paddingBottom: 2,
  },
  itemDetailsText: {
    alignContent: "center",
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5
  },
  costText: {
    fontSize: 20,
    alignContent: "center",
    textAlign: 'center',
    justifyContent: "center",
  },
  buttons: {
    backgroundColor: 'darkred',
    alignSelf: 'center',
    alignContent: 'center',
    height: 90,
    width: 350,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 35,
  },
  restaurantText: {
    color: 'white',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  restaurantInfo: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'darkred',
    color: 'white'
  },
  logo: {
    height: 50,
    width: 50,
    margin: 5
  },

  logoView: {
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },

  foodItem: {
    flex: 1,
    backgroundColor: 'darkred',
    height: 90,
    fontSize: 35,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10
  },

  foodName: {
    alignSelf: 'flex-start'
  },

  price: {
    alignSelf: 'flex-end'
  },

  btnAddToCart: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10
  },
  payInput: {
    borderColor: "gray",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 50,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  payText: {
    color: 'black',
    marginHorizontal: 10,
  },

  btnCart: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 50,
    marginRight: 5,
    marginLeft: 5,
  },

});