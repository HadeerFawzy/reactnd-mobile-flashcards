import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

export class DeckCard extends Component {
 render() {
  
  return (
    <View>
      <Text>{this.props.deck.title}</Text>
    </View>
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
export default connect(mapStateToProps)(DeckCard);
