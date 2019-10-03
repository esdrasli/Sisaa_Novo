/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import firebase from "firebase";
import { Actions } from 'react-native-router-flux';


var { height, width } = Dimensions.get('window');


type Props = {};
export default class Dashboard extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
    };
  }

  
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="#001A4D" barStyle="light-content" />
          <View style={{width: '100%', height: 45, backgroundColor: '#001A4D', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image style={{ width: '09%', height: 35, justifyContent: 'center'}} source={require('../../Images/menu.png')}></Image>            
            <Image style={{ width: '09%', height: 35, justifyContent: 'center'}} source={require('../../Images/cadastro.png')}></Image>
            <Text style={styles.menuText}>Menu</Text>
            <Image style={{ width: '09%', height: 35, justifyContent: 'center'}} source={require('../../Images/logout.png')}></Image>
          </View>
          <TouchableOpacity onPress={() => this.logout()} style={styles.logout} >
            <Text style={styles.logoutText}>ᐸ Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.openSignup()} style={styles.logout} >
            <Text style={styles.logoutText}>Cadastro</Text>
          </TouchableOpacity>
        
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}>
          
          <View style={styles.colunasMenu}>            
            <Text style={styles.titleText}>CheckLists</Text>
            <TouchableOpacity style={styles.colunasBotao}>
              <TouchableOpacity onPress={() => this.openDetalhes()} style={styles.menuButton} >
                <Image style={{ width: '50%', height: '50%' }} source={require('../../Images/abrigo.png')}/>
                <Text style={styles.buttonText}>Abrigo de Rampa</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.openAlert()} style={styles.menuButton} >
              <Image style={{ width: '50%', height: '50%' }} source={require('../../Images/equipamentos.png')}/>
                <Text style={styles.buttonText}>Equipamentos</Text>
                <Text style={styles.buttonText}>Veículos</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>


          <View style={styles.colunasMenu}>
            <Text style={styles.titleText}>Formulários</Text>
            <TouchableOpacity style={styles.colunasBotao}>
              <TouchableOpacity onPress={() => this.openAlert()} style={styles.menuButton} >
              <Image style={{ width: '50%', height: '50%' }} source={require('../../Images/aeronave.png')}/>
                <Text style={styles.buttonText}>Cadastro de</Text>
                <Text style={styles.buttonText}>Aeronave</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.openAlert()} style={styles.menuButton} >
              <Image style={{ width: '50%', height: '50%' }} source={require('../../Images/dape.png')}/>
                <Text style={styles.buttonText}> </Text>
                <Text style={styles.buttonText}>Dape</Text>                
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
      
    );
  }
   
  
  openDetalhes(){
    Actions.checklist();
  }

  openSignup(){
    Actions.signup();
  }
        
  openAlert(){
    alert('Em Desenvolvimento !');
  }
        
  logout(){
      firebase.auth().signOut()
        .then(function () {
          Actions.login();
        })
        .catch(function (error) {
          alert.alert("Atenção", "DEu ruim meu chapa");
        });
    }
  }
       
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonText:{
    color: "white",
    fontSize: 15,
    textAlign: "center",    
  },
  logoutText:{
    color: "#012060",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold"
  },
  colunasBotao:{
    backgroundColor: "#104E8B",
    justifyContent: 'space-around',
    borderRadius: 15,
    alignSelf: "center",
    alignItems: 'center',
    width: '87%',
    height: '55%'    
  },
  menuButton: {
    backgroundColor: "#001A4D",
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 10,
    padding: 10,
    width: '75%',
    height: '40%'    
  },
  colunasMenu:{
    flex: 1, 
    flexDirection: 'column', 
    justifyContent:'center',
    alignItems:'center'
  },
  titleText:{
    fontSize: 25,
    alignItems: 'center',
    textAlign: 'center',
    color: "#012060"
  },
  menuText:{
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    color: "white"
  },
  logout: {
    backgroundColor: "transparent",
    padding: 10,
    margin: 10,
    alignSelf: "flex-start"
  }
});
