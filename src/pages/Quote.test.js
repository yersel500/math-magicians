import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

it('Quote page should render correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
