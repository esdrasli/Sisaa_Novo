/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
var {height, width} = Dimensions.get('window');


type Props = {};
export default class App extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      email: "nathanaelotaku@hotmail.com",
      senha: "123456"
    };
  }
  static navigationOptions = {
    title: 'Entre com e-mail e senha para Login'
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('/Users/natanael/Desktop/SISAAv2/android/app/src/main/res/drawable-xhdpi/icon.png')}/>
        <Text style={styles.titleText}>SISAA</Text>
        <TextInput
          style={styles.inputStyle}
          //onChangeText={(text) => this.setState({email: text})}
          placeholder="Email"
          //value={this.state.email}
        />   
        <TextInput
          style={styles.inputStyle}
          //onChangeText={(text) => this.setState({senha: text})}
          placeholder="Senha"
          secureTextEntry
          //value={this.state.senha}
        />
        <TouchableOpacity style={styles.loginButton} onPress={()=>this.props.navigation.navigate('menu')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} >
          <Text style={styles.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  inputStyle:{
    height: height * 0.06, 
    width: width * 0.85, 
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    margin: width * 0.04
  }, 
  askButton: {
    backgroundColor: "#012060",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.8,
    alignItems: 'center'
  },
  forgotButton: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.8,
    alignItems: 'center'
  },
  buttonText:{
    color: "white",
    fontSize: 18
  },

  titleText:{
    color: "#001A4D",
    fontSize: 18
  },  


  forgotText:{
    color: "blue",
    textDecorationLine: "underline"
  }, 
  loginButton: {
    backgroundColor: "#001A4D",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.3,
    alignItems: 'center'
  }
});
