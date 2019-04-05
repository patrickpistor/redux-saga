import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View} from 'react-native';
import styles from './QButton.Style';
// import { Container, Button, Text } from 'native-base';

export class QButton extends Component {
    render() {
        return (
            <View style={ styles.buttonContainer }>
                <TouchableOpacity style={ styles.quoteButton } onPress={ this.props.getQuote }>
                    <Image source={require('../../assets/images/kanye_face.png')} />
                </TouchableOpacity>
            </View>

        );
    }
}
