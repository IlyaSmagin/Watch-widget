import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main screen with day of the week', () => {
  render(<App />);
  const linkElement = screen.getByText(/Monday/i);
  expect(linkElement).toBeInTheDocument();
});
