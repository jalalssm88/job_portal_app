import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View, Spinner } from 'native-base';
import {Image, TextInput, TouchableOpacity, Picker} from 'react-native';
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
       role:''
     }
   }

  // componentWillReceiveProps(nextProps){
  //   console.log('running next prosps')
  //   console.log('next props', nextProps)
  //   if(nextProps.user.status =="success"){
  //     this.props.navigation.navigate('LoginScreen')
  //   }
  //   this.setState({
  //       name:'',
  //      email:'',
  //      password:'',
  //      role:''
  //   })
  // }

    createUser = ()=>{
      this.props.createUserData(this.state)
    }

    render() {
     
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

          <View
            style={styles.textInput}>
            <Picker
              selectedValue={this.state.language}
              style={{
                height: 50,
                width: "100%",
                color: 'white',
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>

          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
{/*            
          <TouchableOpacity onPress={this.createUser} style={styles.buttons}>
            <Text style={{color:"white"}}>Create</Text>
          </TouchableOpacity> */}
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
    createUserData: payload => dispatch(AuthActions.createUserData(payload)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);