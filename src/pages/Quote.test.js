import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from './Quote';

it('Quote page should render correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Quote Page', () => {
  test('renders App component', () => {
    render(<Quote />);
    screen.debug();
  });
});
