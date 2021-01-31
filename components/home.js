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
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {

  constructor(props){
    super(props);

     this.state={
         businessCode:"",
         menuCode:"",
         quantityOfMenu:0,

       }
     this.business=[{
          value:'BOOST JUICE',
     },{
          value: 'ALI BABA',
     },{
          value: 'ASAKAZE',
     },{
          value: 'Bamboo Garden',
     },{
          value: 'Cafe Cherry Beans',
     }];

     this.menu=[{
               value:'MANGO MAGIC-$15',
          },{
               value: 'LEMON CRUSH-$18',
          },{
               value: 'ALL BERRY BANG-$10',
          },{
               value: 'BANANA BANDIT-$12',
          },{
               value: 'CHOC CHAMPION-$15',
          }];

     this.quantity=[{
                    value:'1',
               },{
                    value: '2',
               },{
                    value: '3',
               },{
                    value: '4',
               },{
                    value: '5',
               },{
                    value: '6',
               }];

this.menu2=[{
               value:'MANGO MAGIC-$15',
          },{
               value: 'LEMON CRUSH-$18',
          },{
               value: 'ALL BERRY BANG-$10',
          },{
               value: 'BANANA BANDIT-$12',
          },{
               value: 'CHOC CHAMPION-$15',
          }];

     this.quantity2=[{
                    value:'1',
               },{
                    value: '2',
               },{
                    value: '3',
               },{
                    value: '4',
               },{
                    value: '5',
               },{
                    value: '6',
               }];



     }



  render() {

    return (
      <View style={styles.container}>
       <View style={styles.heading}>
        <Text style={styles.welcome}>
           Welcome to MQ Order App!
        </Text>
       </View>
        <View style={styles.viewRow1}>
                <Dropdown
                    containerStyle={styles.dropdown1}
                    label='Choose the place of business'
                    data={this.business}
                         onChangeText={(chosenB)	=>	this.setState({
                         businessCode:chosenB
                                  }
                                  )}
                      />
        </View>

        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose a menu item'
                      data={this.menu}
                          onChangeText={(chosenMenu)	=>	this.setState({
                          menuCode:chosenMenu
                                                            }
                                                            )}
                        />
                <Dropdown
                      containerStyle={styles.dropdown3}
                      label='Choose quantity'
                      data={this.quantity}
                      onChangeText={(chosenQ)	=>	this.setState({
                      quantityOfMenu:chosenQ
                         }
                         )}
                        />
        </View>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose a menu item'
                      data={this.menu2}
                       onChangeText={(chosenMenu2)	=>	this.setState({
                          menuCode2:chosenMenu2
                          }
                          )}
                        />
                <Dropdown
                      containerStyle={styles.dropdown3}
                      label='Choose quantity'
                      data={this.quantity2}
                      onChangeText={(chosenQ2)	=>	this.setState({
                      quantityOfMenu2:chosenQ2
                      }
                      )}
                        />
        </View>
        <View style={styles.viewRow2}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressEvent.bind(this)}>
                    <Text style={styles.buttonText}>
                      Proceed
                    </Text>
                </TouchableOpacity>
        </View>
      </View>
    );
  }
    onPressEvent(){
    let	temp	=	this.state.menuCode;
    let	price=parseInt(temp.substring(temp.length-2,temp.length));
    let	temp2	=	this.state.menuCode2;
    let	price2=parseInt(temp2.substring(temp2.length-2,temp2.length));
    let	totalCost=(price*this.state.quantityOfMenu)+(price2*this.state.quantityOfMenu2);
    Actions.summary({
          summaryValue:totalCost
      });
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBEE',
  },
  welcome: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
  },
  viewRow1:{
    flex:1,

  },
  viewRow2:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  viewRow3:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  dropdown1: {
    marginTop: 50,
    marginLeft:50,
    marginRight:50,
  },
  dropdown2:{
    flex: 1,
    marginTop: 40,
    marginLeft:20,
  },
  dropdown3:{
    flex: 1,
    marginTop: 40,
    marginRight:20,
    marginLeft:40,
  },
  button:{
      backgroundColor:'#FFFDE7',
      height: 45,
      width: 140,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderRadius:10,
      borderWidth: 0,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
  }
});
