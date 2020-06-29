import React from 'react';
import { render } from '@testing-library/react';
import App from '../js/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("The Github Cards App");
  expect(linkElement).toBeInTheDocument();
});
