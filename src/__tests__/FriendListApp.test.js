import React from 'react';
import {mount} from 'enzyme';
import {FriendListApp} from '../containers/FriendListApp';
import toJson from 'enzyme-to-json';

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
    friendlist, addFriend, deleteFriend, starFriend, updateSex,
    nextPage, prevPage,
    page
  };
  return {props, ...props};
}

describe('test FriendListApp', () => {
  const {prevPage, nextPage, starFriend, props, deleteFriend} = getProps();
  const component = mount(
    <FriendListApp
      {...props}
    />
  );
  const clickButtonAtIndex = (componentName) => (index) => component
    .find(componentName)
    .find('button')
    .at(index)
    .simulate('click');

  const clickPaginationButtonAtIndex = clickButtonAtIndex("Pagination");
  const clickFriendListItemButtonAtIndex = clickButtonAtIndex("FriendListItem");


  it('renders the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('test Pagination', () => {
    it('prev button click calls prevPage action', () => {
      clickPaginationButtonAtIndex(0);
      expect(prevPage).toHaveBeenCalled();
    });
    it('next button click  nextPage action', () => {
      clickPaginationButtonAtIndex(1);
      expect(nextPage).toHaveBeenCalled();
    });
  });

  describe('test FriendListItem', () => {

    it('star button click calls starFriend action', () => {
      clickFriendListItemButtonAtIndex(0);
      expect(starFriend).toHaveBeenCalled();
    });
    it('delete button click  deleteFriend action', () => {
      clickFriendListItemButtonAtIndex(1);
      expect(deleteFriend).toHaveBeenCalled();
    });
  });

});


