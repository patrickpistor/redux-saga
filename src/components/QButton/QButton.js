import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';

export class QButton extends Component {
    render() {
        return (
            <Container>
                <Button onPress={ this.props.getNewQuote }>
                    <Text>
                        Quote
                    </Text>
                </Button>
            </Container>
        );
    }
}
