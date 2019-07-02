import { StyleSheet } from "react-native"

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
   dropDown:{
      justifyContent: 'center',
   },
   textInput:{
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
   cartItem:{
    borderColor: "darkred",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius:5,
    flexDirection: 'row',
   },
   cartItemDetails:{
    flex:3,
    borderRightWidth: 2,
    borderColor: "darkred",
    //alignContent: "center",
    //textAlign: 'center',
    //alignSelf: 'stretch',
   },
   cartItemCost:{
     flex: 1,
     alignContent: "center",
    textAlign: 'center',
    justifyContent: "center",
   },
   cartItemRemove:{
    flexDirection: 'row',
    alignSelf: "center",
    paddingBottom: 2,
   },
   itemDetailsText:{
    alignContent: "center",
    textAlign: 'center',
    fontSize:18,
    paddingTop:5,
    paddingBottom: 5
   },
   costText:{
     fontSize:20
   }
 });