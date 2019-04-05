import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Quote.styles'
import { QButton } from "../../components/QButton/QButton";

export class Quote extends Component {
    render() {
        return (
            <View style={ styles.quoteContainer } >
                <View style={{paddingHorizontal: 25,}}>

                    <Text style={ styles.quoteText }>
                        "{ this.props.kanye }"
                    </Text>
                    <Text style={[styles.quoteText, { fontSize: 18, fontFamily: 'AvenirNext-Bold'}]}>
                        - Kanye West
                    </Text>
                </View>

                {this.props.error && <Text style={{ color: "red" }}>Uh oh - something went wrong!</Text>}
                <QButton getQuote={ this.props.getQuote }/>
            </View>
        );
    }
}
