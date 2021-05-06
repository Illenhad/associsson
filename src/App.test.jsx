import { render, screen } from '@testing-library/react';
import App from './App';

test('renders follow us link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Suivez-nous/);
  expect(linkElement).toBeInTheDocument();
});
