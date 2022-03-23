import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from './Home';

it('Home page should render correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Home Page', () => {
  test('renders App component', () => {
    render(<Home />);
    screen.debug();
  });
});
