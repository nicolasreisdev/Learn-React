import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { TransactionsContext } from '../mocks/browser';

const server = setupServer(
  rest.get('/api/transactions', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, amount: 100 }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('hello world!', () => {
  render(<TransactionsContext />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});