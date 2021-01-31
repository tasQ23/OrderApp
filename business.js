/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
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
           <NavigationBar
                title={titleConfig}
                rightButton={rightButtonConfig}
                leftButton={leftButtonConfig}
           />
           <TouchableOpacity>
           <Text style={styles.back}>Back</Text>
           </TouchableOpacity>
           <Text style={styles.welcome}>
            Campus Common Stores
           </Text>

           <ScrollView>
           <Card
             title='Caffe-Cherry-Beans'
             image={require('./Caffe-Cherry-Beans.jpg')}>

             <Button
               icon={{name: 'code'}}
               backgroundColor='#03A9F4'
               fontFamily='Lato'
               buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
               title='Order NOW' />
           </Card>
           <Card
                        title='Mad-Mex'
                        image={require('./Mad-Mex.png')}>

                        <Button
                          icon={{name: 'code'}}
                          backgroundColor='#03A9F4'
                          fontFamily='Lato'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Order NOW' />
           </Card>
           <Card
                        title='Sushi World'
                        image={require('./Sushi-World.jpg')}>

                        <Button
                          icon={{name: 'code'}}
                          backgroundColor='#03A9F4'
                          fontFamily='Lato'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Order NOW' />
           </Card>
           </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#FFF59D',
},
back:{
textAlign:'center',
},
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },

});
