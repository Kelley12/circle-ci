import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ActivateLasers from './ActivateLasers';

test('ActivateLasers component works', () => {
    const { container } = render(<ActivateLasers />)
    const text = container.firstChild.firstChild;
    const button = container.firstChild.lastChild;
    expect(text.textContent).toBe('Lasers Deactivated');
    fireEvent.click(button);
    expect(text.textContent).toBe('Lasers Activated');
    fireEvent.click(button);
    expect(text.textContent).toBe('Lasers Deactivated');
});