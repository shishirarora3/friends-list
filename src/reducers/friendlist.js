import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      starred: false
    },
    {
      name: 'George Washington',
      starred: false
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index+item.name !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index+item.name === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    case types.UPDATE_SEX:
      let _friends = [...state.friendsById];
      let _friend = _friends.find((item, index) => index+item.name === action.id);
      _friend.sex = action.sex;
      return {
        ...state,
        friendsById: _friends
      };
    default:
      return state;
  }
}
