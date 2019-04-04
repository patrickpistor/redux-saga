import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Quote.styles'

export class Quote extends Component {
    render() {
        return (
            <View style={ styles.quoteContainer }>
                <Text style={ styles.quoteText }>
                    "{ this.props.quote }"{"\n"}{"\n"} -Kanye
                </Text>
            </View>
        );
    }
}
