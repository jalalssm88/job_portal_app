import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View, Spinner } from 'native-base';
import {Image, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Style'
import { connect } from "react-redux";
import { AuthActions } from '../../store/actions/';

class LoginScreen extends React.Component {
   constructor(props){
     super(props)
     this.state={
       email:'',
       password:''
     }
    //  let token = AsyncStorage.getItem("user")
    //  console.log('tokennnnnnn', token)
   }

  // componentWillReceiveProps(nextProps) {
  //   console.log('comp reviece props', nextProps)
  // }

   singUp =()=>{
    this.props.loginUserData(this.state)
   }
    render() {
      return (
        <View style={styles.formContainer}>
          <View style={[styles.logoContainer, {marginBottom:20, marginTop:10}]}>
            <Image source={(require('../../images/logo.png'))} style={{width:150, height:80}}/>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
         <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <TouchableOpacity onPress={this.singUp} style={styles.buttons}>
            <Text style={{color:"white"}}>Login</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

const mapStateToProps = (state) => {
  console.log('mapstattoprops in signup component', state)
  return {
    user:state.Auth.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUserData: payload => dispatch(AuthActions.loginUserData(payload)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);