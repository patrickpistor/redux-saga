import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

class Home extends Component {
    render() {
        const { fetching, kanye, onRequestKanye, error } = this.props;
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
                {kanye === null ? (
                    <View>
                        <Text>Welcome to React Native!</Text>
                        <Text>To get started, edit App.js</Text>
                    </View>
                ) : (
                    <Text>{ kanye }</Text>
                )}
                {fetching ? (
                    <Text>Grabbing New Quote</Text>
                ) : (
                    <TouchableOpacity onPress={() => {onRequestKanye()}}>
                        <Text>Get New Quote</Text>
                    </TouchableOpacity>
                )}
                {error && <Text style={{ color: "red" }}>Uh oh - something went wrong!</Text>}
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

  