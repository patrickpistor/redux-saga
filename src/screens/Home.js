import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

export default class Home extends Component {
    render() {
      return (
        <ScrollView>
            <Text>Welcome to React Native!</Text>
            <Text>To get started, edit App.js</Text>
        </ScrollView>
      );
    }
}