import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import App from '@/App';

it('Renders the App components', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const heading = await screen.findByRole('heading', {
    name: /layout/i,
  });

  expect(heading).toBeInTheDocument();
});
