import * as types from '../constants/ActionTypes';

export function nextPage(payload) {
  return {
    type: types.NEXT_PAGE,
    payload
  };
}

export function prevPage(payload) {
  return {
    type: types.PREV_PAGE,
    payload
  };
}

