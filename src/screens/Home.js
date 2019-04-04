import React, { Component } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { connect } from "react-redux";
import { Quote } from "../components/Quote/Quote";
import { QButton } from "../components/QButton/QButton";

class Home extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { fetching, fetchingGIF, kanye, gif, onRequestKanye, onRequestGIF, error } = this.props;
        return (
            <GestureRecognizer
                onSwipeRight={() => {console.log(kanye); onRequestKanye(); onRequestGIF()}}
                config={{
                    velocityThreshold: 0.3,
                    directionalOffsetThreshold: 80
                }}
                style={{ flex: 1, }} 
             >
                <Quote kanye={ kanye } quote={ error } gif={ gif } fetching={ fetching } fetchingGIF={ fetchingGIF }/>
                <QButton getNewQuote={ () => { onRequestKanye() } }/>
            </GestureRecognizer>

        );
    }
}

const mapStateToProps = state => {
    return {
      fetching: state.fetching,
      fetchingGIF: state.fetchingGIF,
      kanye: state.kanye,
      gif: state.gif,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

