import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View, Spinner, } from 'native-base';
import {Image, TextInput, TouchableOpacity,Picker, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Style'
import { connect } from "react-redux";
import { AuthActions } from '../../store/actions/';
import RNPickerSelect from 'react-native-picker-select';


class SignupScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      password:'',
      role:'',
    }
  }
  createUser = ()=>{
    this.props.createUserData(this.state)
  }

  render() {
    const {isLoading} = this.props
    console.log('isloading', isLoading)
    return (
      <View style={styles.formContainer}>
        <View style={[styles.logoContainer, {marginBottom:20, marginTop:10}]}>
          <Image source={(require('../../images/logo.png'))} style={{width:150, height:80}}/>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
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
        <View style={styles.textInput}>
          <Picker style={styles.pickerStyle} selectedValue={this.state.role} onValueChange={(role) =>  this.setState({role})} >  
              <Picker.Item label="Select role" value={null} />  
              <Picker.Item label="Student" value="student" />  
              <Picker.Item label="Company" value="company" />  
          </Picker>  
        </View>
        <TouchableOpacity onPress={this.createUser} style={styles.buttons}>
          <Text style={{color:"white"}}>Create</Text>
        </TouchableOpacity>
        <View>
          {
          
            isLoading?<Spinner color="red" />:<Text>sdfdsf</Text>
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapstattoprops in signup component', state)
  return {
    user:state.Auth.user,
    isLoading:state.Auth.isLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createUserData: payload => dispatch(AuthActions.createUserData(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);