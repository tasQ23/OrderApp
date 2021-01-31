import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default class summary extends Component {

  constructor(props) {
    super(props);

    let params = this.props.navigation.state.params;
    this.state = {
      finalValue:	params.summaryValue
    };
  }
  render() {

    return(
      <View style={styles.container}>
      <View style={styles.section}>
      <Text style ={styles.sectionText}>
        Thank you for your order!
        </Text>
        <Text style ={styles.sectionText}>
         Your total cost is : ${this.state.finalValue}
         </Text>
        <Text style ={styles.sectionText}> Your order will be ready for pick up in 15 minutes </Text>
      </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF9A9A',
  },
  sectionText:{
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  }
});
