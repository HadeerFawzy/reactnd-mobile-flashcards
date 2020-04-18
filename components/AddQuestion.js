import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

export class AddQuestion extends Component {
  render() {
    return (
      <View>
        <Text>Add Question!</Text>
      </View>
    );
  }
}

export default connect()(AddQuestion);
