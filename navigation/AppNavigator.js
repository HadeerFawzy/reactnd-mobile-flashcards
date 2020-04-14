import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import * as Icon from '@expo/vector-icons';
import DecksList from '../components/DecksList';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
import { white, green, red } from '../utils/colors';

const isIOS = Platform.OS === 'ios' ? true : false;

const Stack = createStackNavigator();

function FlashCardsTabs() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="DecksList">
      <Stack.Screen name="DecksList" component={DecksList} options={{ title: 'Decks' }}/>
      <Stack.Screen name="AddDeck" component={AddDeck} options={{ title: 'Add Deck' }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default FlashCardsTabs;