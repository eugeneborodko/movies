import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('renders layout with children', () => {
    render(
      <Layout>
        <p>Test content</p>
      </Layout>
    );
    expect(screen.getByText(/Test contenrt/i)).toBeInTheDocument();
  });
});
