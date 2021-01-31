import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import{Button,Content,Icon,Text, List,ListItem} from 'native-base';

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
           <TouchableOpacity>
                      <Text style={styles.back}>Back</Text>
                      </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.welcome}>
              Order Confirmed!!
            </Text>
            <Text style={styles.welcome}>Order ID#123456</Text>
            <Text style={styles.welcome1}>
            Total Cost $17 Inc GST
            </Text>
            <Text style={styles.welcome1}>Estimated pick up time: 14:35 PM </Text>
            <Text style={styles.welcome1}>Place: Sushi Bar </Text>
            <Content>
            <List>
              <ListItem>
                      <Button iconLeft light>
                        <Text>Cancel Order</Text>
                      </Button>

                      <Button iconRight light>
                        <Text>Proceed to payment</Text>
                        <Icon name='arrow-forward' />
                      </Button>
              </ListItem>
            </List>
            </Content>
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
