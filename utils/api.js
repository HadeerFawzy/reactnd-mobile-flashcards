import { AsyncStorage } from 'react-native';
import { decks } from './_DATA';

const DECKS_STORAGE_KEY = 'Flashcards:decks';

export function getData() {
  return decks;
}

function formatDeckResults(results) {
  return results === null ? decks : JSON.parse(results);
}

export function getOldDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDeckResults);
}

export async function getDecks() {
  const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  if (storeResults === null) {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  }
  return storeResults === null ? decks : JSON.parse(storeResults);
}

export async function addNewDeck(title) {
  await AsyncStorage.mergeItem( DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  );
}