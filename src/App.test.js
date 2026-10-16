// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OutlineAnnal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OutlineAnnal/i);
    expect(titleElement).toBeInTheDocument();
});
