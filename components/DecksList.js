import React, { Component } from 'react';
import { 
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { handleInitialData } from '../actions/index';
import { connect } from 'react-redux';
import DeckCard from './DeckCard';
import { white, green, red } from '../utils/colors';

export class DecksList extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {

    return (
      <ScrollView style={styles.decksWrap}>
        <Text style={styles.title}>Mobile Flashcards</Text>
        {Object.values(this.props.decks).map(deck => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() =>
                navigation.navigate('DeckDetail', { title: deck.title })
              }
            >
              <Text>
                {deck.title}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View style={{ marginBottom: 30 }} />
      </ScrollView>
    )
  };
}


const mapStateToProps = state => ({ decks: state });

export default connect( mapStateToProps, { handleInitialData } )(DecksList);

// function mapStateToProps ({ decks }) {
//   return {
//     decks
//   }
// }

// export default connect(mapStateToPropsn, { handleInitialData })(DecksList)


const styles = StyleSheet.create({
  decksWrap: {
    flex: 1,
    padding: 16,
    backgroundColor: white
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
    color: green
  },
  deckTitle: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
    color: green
  }
});