import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

jest.setTimeout(15000);

const waitForBoot = async () => {
  await screen.findByText(/Afrah Mahmud/i, {}, { timeout: 10000 });
};

test('renders macOS desktop on large screens', async () => {
  window.innerWidth = 1200;
  render(<App />);
  await waitForBoot();
  expect(screen.getByText(/Afrah Mahmud/i)).toBeInTheDocument();
  expect(screen.getByText(/System/i)).toBeInTheDocument(); // Menu bar item
});

test('renders iOS mobile on small screens', async () => {
  window.innerWidth = 400;
  window.dispatchEvent(new Event('resize'));
  render(<App />);
  await waitForBoot();
  // On mobile, the 'About' window is open by default, containing a heart and my name.
  // The 'Done' button is the best indicator of an iOS window being open.
  expect(screen.getAllByText(/Done/i).length).toBeGreaterThan(0);
});

test('iOS window opens and closes', async () => {
  window.innerWidth = 400;
  window.dispatchEvent(new Event('resize'));
  render(<App />);
  await waitForBoot();

  // Click 'Experience' app icon. Since it might appear twice (label + something else), use getAll
  const expIcons = screen.getAllByText(/Experience/i);
  fireEvent.click(expIcons[0]);

  // Verify content
  expect(await screen.findByText(/Member of Technical Staff/i)).toBeInTheDocument();

  const doneBtns = screen.getAllByText(/Done/i);
  fireEvent.click(doneBtns[0]);

  await waitFor(() => {
    expect(screen.queryByText(/Member of Technical Staff/i)).not.toBeInTheDocument();
  });
});
