import React from 'react';
import { mount } from 'enzyme';
import App from '../src/containers/App';
import sinon from 'sinon';




it('calls componentDidMount', () => {
  sinon.spy(App.prototype, 'componentDidMount');
  const wrapper = mount(<App />);
  expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
});
/*
it('simulates click events', () => {
  const onButtonClick = sinon.spy();
  const wrapper = mount((
    <App onButtonClick
    ={onButtonClick} />
  ));
  wrapper.find('button').simulate('click');
  expect(onButtonClick).to.have.property('callCount', 1);
});
*/
