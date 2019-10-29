import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View, Spinner } from 'native-base';
import {Image, AsyncStorage} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import jwt_decode from 'jwt-decode';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current_user:[]
    }
this.getUser();
  }

  getUser = () => {
    AsyncStorage.getItem("user").then((user) => {
      console.log('usrrrrrrrrrrr', user)
        if (user) {
          console.log('i am in user activeeee')
            let parsedData = JSON.parse(user);
            console.log('parsed dataa', parsedData)
            this.setState({
              current_user:parsedData.user_name
            })
        }else{
          this.setState({
            loader:false
          })
        }
    })
}
    render() {
      console.log('helllllo', this.state.current_user)
      console.log('iam renderingg')
      return (
        <View>
          <Text>
            helllo homeeee
          </Text>

          <Text>Current user is {this.state.current_user}</Text>
        </View>
      );
    }
}


export default HomeScreen;