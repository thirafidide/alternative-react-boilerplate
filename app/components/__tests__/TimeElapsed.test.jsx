import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TimeElapsed from '../TimeElapsed.jsx';

describe('Time Elapsed Component', function () {
  it('renders without problems', function () {
    var timeElapsedComponent = TestUtils.renderIntoDocument(<TimeElapsed/>);
    expect(timeElapsedComponent).toExist();
  });
});