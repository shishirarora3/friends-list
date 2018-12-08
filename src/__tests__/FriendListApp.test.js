import React from 'react';
import {mount} from 'enzyme';
import {FriendListApp} from '../containers/FriendListApp';
import toJson from 'enzyme-to-json';

const thunk = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action);
};

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };
  const next = jest.fn();
  const invoke = action => thunk(store)(next)(action);
  return {store, next, invoke};
};

function getProps() {
  const friendlist = {
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
  const addFriend = jest.fn();
  const deleteFriend = jest.fn();
  const starFriend = jest.fn();
  const updateSex = jest.fn();
  const nextPage = jest.fn();
  const prevPage = jest.fn();
  const page = {pageNo: 1};
  const props = {
    ...{
      friendlist, addFriend, deleteFriend, starFriend, updateSex,
      nextPage, prevPage,
      page
    }
  };
  return {prevPage, props, nextPage};
}

describe('test FriendListApp', () => {
  const {prevPage, nextPage, props} = getProps();
  const component = mount(
    <FriendListApp
      {...props}
    />
  );
  const clickButtonAtIndex = (index) => component
    .find('Pagination')
    .find('button')
    .at(index)
    .simulate('click');

  it('renders the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });


  it('prev button click calls prevPage action', () => {
    expect(clickButtonAtIndex(0)).toHaveBeenCalled();
  });
  it('next button click  nextPage action', () => {
    expect(clickButtonAtIndex(1)).toHaveBeenCalled();
  });
});


