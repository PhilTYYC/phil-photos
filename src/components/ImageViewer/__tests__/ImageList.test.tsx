import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageList from '../ImageList';

describe('ImageList Test', () => {
    it('should render',  () => {
        render(<ImageList />);
        const listElement = screen.getByText(/Image List/)
        expect(listElement).toBeInTheDocument();
    })
});
