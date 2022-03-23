import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('The calculator renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Calculator', () => {
  test('renders App component', () => {
    render(<Calculator />);
    screen.debug();
  });
});
