import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { Quote } from "../components/Quote/Quote";
import { QButton } from "../components/QButton/QButton";

class Home extends Component {
    render() {
        const { fetching, kanye, onRequestKanye, error } = this.props;
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
                <Quote quote={ kanye }/>
                <QButton getNewQuote={ () => { onRequestKanye() } }/>

            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
      fetching: state.fetching,
      kanye: state.kanye,
      error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
      onRequestKanye: () => dispatch({ type: "API_CALL_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

