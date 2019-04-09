import React, { Component } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { connect } from "react-redux";
import { Quote } from "../../components/Quote/Quote";
import { QButton } from "../../components/QButton/QButton";
import {ImageBackground, Text} from 'react-native';
import styles from './Home.styles';

const mapStateToProps = state => {
    return {
        fetching: state.quoteReducer.fetching,
        fetchingGIF: state.gifReducer.fetchingGIF,
        kanye: state.quoteReducer.kanye,
        gif: state.gifReducer.gif,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestKanye: () => {
            dispatch({ type: "QUOTE_CALL_REQUEST" });
        },
        onRequestGIF: () => {
            dispatch({ type: "GIF_CALL_REQUEST" });
        }
    };
};

class Home extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const { fetching, fetchingGIF, kanye, gif, onRequestKanye, onRequestGIF, error } = this.props;
        return (
            <GestureRecognizer
                onSwipeRight={() => {onRequestKanye(); onRequestGIF()}}
                config={{
                    velocityThreshold: 0.3,
                    directionalOffsetThreshold: 80
                }}
                style={{ flex: 1, }}
             >
                <ImageBackground source={{ uri: gif }} style={ styles.imageBackground }>
                    <Quote kanye={ kanye } quote={ error } fetching={ fetching } fetchingGIF={ fetchingGIF } getQuote={ onRequestKanye } getGif={ onRequestGIF } />
                </ImageBackground>
            </GestureRecognizer>

        );
    }
}

const reduxConnected = connect(mapStateToProps, mapDispatchToProps)
export default  reduxConnected(Home)

