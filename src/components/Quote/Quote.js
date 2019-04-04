import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './Quote.styles'

export class Quote extends Component {
    render() {
        return (
            <ImageBackground source={{ uri: this.props.gif }} style={{ height: '100%', width: '100%', }}>
                <View style={ styles.quoteContainer }>
                    {this.props.kanye === null ? (
                        <View>
                            <Text style={ styles.quoteText }>Welcome to React Native!</Text>
                            <Text style={ styles.quoteText}>To get started, edit App.js</Text>
                        </View>
                    ) : (
                        <View style={{paddingHorizontal: 25,}}>
                            <Text style={ styles.quoteText }>
                                "{ this.props.kanye }"
                            </Text>
                            <Text style={[styles.quoteText, { fontSize: 18, fontFamily: 'AvenirNext-Bold'}]}>
                                - Kanye West
                            </Text>
                        </View>
                    )}
                    {this.props.fetching && this.props.fetchingGIF ? (
                        <Text style={{ color: '#FFF'}}>Grabbing New Quote</Text>
                    ) : (
                        <View>

                        </View>
                    )}
                    {this.props.error && <Text style={{ color: "red" }}>Uh oh - something went wrong!</Text>}
                </View>
            </ImageBackground>
        );
    }
}
