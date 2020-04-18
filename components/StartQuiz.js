import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { white, green, red, grey } from '../utils/colors';

export class StartQuiz extends Component{
  render() {
    return (
      <ScrollView>

      </ScrollView>
    );
  }
}

const mapStateToProps = (state, { route }) => {
  const title = route.params.title || undefined;
  const deck = state[title];
  return {
    deck
  };
};

export default connect(mapStateToProps)(StartQuiz);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: 'center',
    margin: 16,
    color: green
  }
});