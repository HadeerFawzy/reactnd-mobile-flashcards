import { getDecks } from '../utils/api';

export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export function getDecksList(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}

export function removeDeckAction(title) {
  return {
    type: REMOVE_DECK,
    title
  };
}

export function handleInitialData() {
  return dispatch => {
    return getDecks().then(decks => {
      dispatch(getDecksList(decks));
    });
  };
}

