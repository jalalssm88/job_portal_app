import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View, Spinner } from 'native-base';
import {Image, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import NavigationServices from './../../services/NavigationServices'
import styles from './Style'
import { connect } from "react-redux";
import { AuthActions } from '../../store/actions/';

class LandingScreen extends React.Component {
  constructor(props){
    super(props);
    // this.getUser();
  }
  getUser = () => {
    console.log('async storage', AsyncStorage.getItem('user'))
    AsyncStorage.getItem("user").then((user) => {
      console.log('usrrrrrrrrrrr', user)
        if (user) {
            let parsedData = JSON.parse(user);
            this.props.login(parsedData);
            NavigationServices.reset("TabStack")
        }
        else {
          this.props.navigation.navigate('LoginScreen');
        }
    })
}
  gotoLogin = () =>{
    this.props.navigation.navigate('LoginScreen')
  }
  gotoSignup = () =>{
    this.props.navigation.navigate('SignupScreen')
  }
    render() {
      return (
        <View>
          <ImageBackground source={require('../../images/landing_image.jpg')} style={{width: '100%', height: '100%',}}>
              <View style={styles.landingContainer}>
                <View style={styles.logoContainer}>
                  <Image source={(require('../../images/logo.png'))} style={{width:150, height:80}}/>
                </View>
                <View>
                  <Text style={{color:'white', fontSize:18, textAlign:'center',}}>Find your desired job in your
                    favrioute company, 
                    Apply easy on from your mobile app, register,
                    login, see daily updates of new job of according to your need
                  </Text>
                </View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity onPress={this.gotoSignup} style={[styles.buttons,{marginBottom:10}]}>
                    <Text style={{color:"white"}}>Signup</Text>
                  </TouchableOpacity>
                  <Text style={{fontSize:20, color:'white', marginBottom:10}}>OR</Text>
                  <TouchableOpacity onPress={this.gotoLogin} style={styles.buttons}>
                    <Text style={{color:"white"}}>login</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </ImageBackground>
        </View>
      );
    }
}

const mapStateToProps = (state) => {
  console.log('mapstattoprops in landing component', state)
  return {
    user:state.Auth.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUserData: payload => dispatch(AuthActions.loginUserData(payload)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);

