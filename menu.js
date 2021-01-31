/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Picker, Form, CheckBox } from 'native-base';


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
constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }


  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
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
            Sushi World Menu
           </Text>
           <Container>
                   <Content>
                     <List>
                       <ListItem>
                           <CheckBox checked={false} />
                         <Thumbnail square size={80} source={require('./beefTeriyaki.png' )} />
                         <Body>
                           <Text>Beef Teriyaki</Text>
                           <Text note>$3/roll</Text>
                         </Body>
                         <Content>
                           <Form>
                              <Picker
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />
                                <Picker.Item label="3" value="key2" />
                                <Picker.Item label="4" value="key3" />
                                <Picker.Item label="5" value="key4" />
                              </Picker>
                            </Form>
                            </Content>
                       </ListItem>
                       <ListItem>
                       <CheckBox checked={false} />
                         <Thumbnail square size={80} source={require('./california.png' )} />
                         <Body>
                           <Text>California Roll</Text>
                           <Text note>$3/roll</Text>
                         </Body>
                           <Content>
                           <Form>
                              <Picker
                                mode="dropdown"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />
                                <Picker.Item label="3" value="key2" />
                                <Picker.Item label="4" value="key3" />
                                <Picker.Item label="5" value="key4" />
                              </Picker>
                            </Form>
                            </Content>
                       </ListItem>
                         <ListItem>
                         <CheckBox checked={false} />
                         <Thumbnail square size={80} source={require('./chicken.png' )} />
                         <Body>
                           <Text>Chicken Roll</Text>
                           <Text note>$3/roll</Text>
                         </Body>
                           <Content>
                           <Form>
                              <Picker
                                mode="dropdown"
                                selectedValue={this.state.selected3}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />
                                <Picker.Item label="3" value="key2" />
                                <Picker.Item label="4" value="key3" />
                                <Picker.Item label="5" value="key4" />
                              </Picker>
                            </Form>
                            </Content>
                       </ListItem>
                       <ListItem>
                       <CheckBox checked={false} />
                             <Thumbnail square size={80} source={require('./chilliTofu.png' )} />
                             <Body>
                               <Text>Chilly Tofu Roll</Text>
                               <Text note>$4/roll</Text>
                             </Body>
                             <Content>
                           <Form>
                              <Picker
                                mode="dropdown"
                                selectedValue={this.state.selected4}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />
                                <Picker.Item label="3" value="key2" />
                                <Picker.Item label="4" value="key3" />
                                <Picker.Item label="5" value="key4" />
                              </Picker>
                            </Form>
                            </Content>
                           </ListItem>
                           <ListItem>
                           <CheckBox checked={false} />
                             <Thumbnail square size={80} source={require('./eel.roll.png' )} />
                             <Body>
                               <Text>Eel Roll</Text>
                               <Text note>$4/roll</Text>
                             </Body>
                            <Content>
                           <Form>
                              <Picker
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />
                                <Picker.Item label="3" value="key2" />
                                <Picker.Item label="4" value="key3" />
                                <Picker.Item label="5" value="key4" />
                              </Picker>
                            </Form>
                            </Content>
                           </ListItem>
                           <ListItem>
                             <CheckBox checked={false} />
                             <Thumbnail square size={80} source={require('./freshPrawn.roll.png' )} />
                             <Body>
                               <Text>Fresh Prawn Roll</Text>
                               <Text note>$4/roll</Text>
                             </Body>
                            <Content>
                           <Form>
                              <Picker
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />
                                <Picker.Item label="3" value="key2" />
                                <Picker.Item label="4" value="key3" />
                                <Picker.Item label="5" value="key4" />
                              </Picker>
                            </Form>
                            </Content>
                           </ListItem>
                           <ListItem>
                              <CheckBox checked={false} />
                             <Thumbnail square size={80} source={require('./salmon.roll.png' )} />
                             <Body>
                               <Text>Salmon Roll</Text>
                               <Text note>$3/roll</Text>
                             </Body>
                             <Content>
                           <Form>
                              <Picker
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />
                                <Picker.Item label="3" value="key2" />
                                <Picker.Item label="4" value="key3" />
                                <Picker.Item label="5" value="key4" />
                              </Picker>
                            </Form>
                            </Content>
                           </ListItem>
                           <ListItem>
                               <CheckBox checked={false} />
                               <Thumbnail square size={80} source={require('./tuna.roll.png' )} />
                               <Body>
                                 <Text>Tuna Roll</Text>
                                 <Text note>$3/roll</Text>
                               </Body>
                             <Content>
                           <Form>
                              <Picker
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />
                                <Picker.Item label="3" value="key2" />
                                <Picker.Item label="4" value="key3" />
                                <Picker.Item label="5" value="key4" />
                              </Picker>
                            </Form>
                            </Content>
                             </ListItem>
                             <ListItem>
                                       <CheckBox checked={false} />
                                       <Thumbnail square size={80} source={require('./vege.roll.png' )} />
                                       <Body>
                                         <Text>Vege Roll</Text>
                                         <Text note>$3/roll</Text>
                                       </Body>
                            <Content>
                           <Form>
                              <Picker
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />
                                <Picker.Item label="3" value="key2" />
                                <Picker.Item label="4" value="key3" />
                                <Picker.Item label="5" value="key4" />
                              </Picker>
                            </Form>
                            </Content>
                                     </ListItem>
                             <ListItem>
                                  <Body>
                                  <Text>Total       $17</Text>
                                  </Body>
                                  <TouchableOpacity>
                                  <Text style={{color: 'blue'}}>Confirm</Text>
                                  </TouchableOpacity>
                             </ListItem>
                     </List>
                   </Content>
           </Container>

     </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'white',
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
