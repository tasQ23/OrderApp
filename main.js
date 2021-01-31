import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import{
    Button
} from 'react-native-elements';
import NavigationBar from 'react-native-navbar';


const rightButtonConfig = {
  title: 'Settings',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'MQ Order on the Go!',
};

const leftButtonConfig={
    title:'Home',
    handler:()=>alert('This is home!')};



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
           <NavigationBar
                title={titleConfig}
                rightButton={rightButtonConfig}
                leftButton={leftButtonConfig}
           />
        </View>
        <View>
            <Text style={styles.welcome}>
              Welcome to MQ Order App!!
            </Text>
            <Text style={styles.welcome1}>
            Click on the order button to start making an order!
            </Text>
             <TouchableOpacity style={styles.orderButton}>
                     <Text style={styles.welcome1}> Order! </Text>
             </TouchableOpacity>

        </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF59D',
    position: "relative",
},
  header:{
  width:410,
  height:100,
  position: "relative",
  height: "25%"
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  welcome1:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  orderButton: {
        padding:20,
        borderWidth:1,
        backgroundColor:'#80DEEA',

     },
});
