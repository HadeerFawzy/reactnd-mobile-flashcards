import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DecksList from '../components/DecksList';
import AddDeck from '../components/AddDeck';
import { white, green, red } from '../utils/colors';

const isIOS = Platform.OS === 'ios' ? true : false;

const AppTabs = createBottomTabNavigator()

function FlashCardsTabs() {
  return (
    <NavigationContainer>
      <AppTabs.Navigator>
        <AppTabs.Screen name="Decks" component={Decks} />
        <AppTabs.Screen name="AddDeck" component={AddDeck} />
      </AppTabs.Navigator>
    </NavigationContainer>
  );
}

export default createAppContainer(FlashCardsTabs);