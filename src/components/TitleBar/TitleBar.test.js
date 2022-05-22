import { render } from '@testing-library/react';
import TitleBar from './TitleBar.js';

describe('Character', () => {
  let container;
  beforeEach(() => (container = render(<TitleBar />)));

  it('should render title on the page', () => {
    const title = container.getByTestId('title-test');
    expect(title.textContent).toEqual('Characters Grid');
  });
});
