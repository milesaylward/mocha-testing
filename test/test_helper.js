import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

//set up testing enviroment to run like browser in the CLI
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = { userAgent: 'node.js' };
const $ = _$(global.window);

//renderComponent renders a react component to plain html
function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

//this helper is for simulating events
$.fn.simulate = function(eventName, value) {
  if(value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

//using chai-jquery for easy selection of elements
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
