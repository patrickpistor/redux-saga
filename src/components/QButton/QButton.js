import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View} from 'react-native';
import styles from './QButton.Style';
// import { Container, Button, Text } from 'native-base';

export class QButton extends Component {
    render() {
        getData = () => {
            this.props.getQuote()
            this.props.getGif()
        }
        return (
            <View style={ styles.buttonContainer }>
                <TouchableOpacity style={ styles.quoteButton } onPress={ getData }>
                    <Image source={require('../../assets/images/kanye_face.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}
