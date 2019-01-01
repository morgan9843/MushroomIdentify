import React from 'react';
import { Alert, Text, View, TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import styles from './styles/styles';

//
// Start screen
//
class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Welcome!',
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FEFACB'}}>

        <View style={styles.containerTop}>       
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.buttonNew}>
              <Text style={styles.buttonText}> 
                New
              </Text>
            </View>
          </TouchableHighlight>        
        </View>

      <View style={styles.continerMid}></View>

        <View style={styles.containerBot}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')} underlayColor="white">
            <View style={styles.buttonDetails}>
              <Text style={styles.buttonText}>
                Details
              </Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

//
// Details pertaining to the project
//
class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Project Details / About',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen Place Holder</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen 
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);