import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {FriendListApp} from '../containers/FriendListApp';
import toJson from 'enzyme-to-json';

const thunk = ({ dispatch, getState }) => next => action => {
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
  return { store, next, invoke };
};

/*it('passes through non-function action', () => {
  const { next, invoke } = create();
  const action = { type: 'TEST' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action)
});*/
it('renders the component', () => {
  const tree = renderer.create(<FriendListApp />).toJSON();
  expect(tree).toMatchSnapshot();
});

