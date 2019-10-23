import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View, Spinner } from 'native-base';
import {Image, TouchableOpacity, ImageBackground} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Style'
class LandingScreen extends React.Component {
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
                  <Text style={{color:'white', fontSize:18}}>Find your desired job in your
                    favrioute company, 
                    Apply easy on from your mobile app, register,
                    login, see daily updates of new job of according to your need
                  </Text>
                </View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity onPress={this.gotoSignup} style={styles.buttons}>
                    <Text style={{color:"white"}}>Signup</Text>
                  </TouchableOpacity>
                  <Text style={{fontSize:20, color:'white'}}>OR</Text>
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

export default LandingScreen;