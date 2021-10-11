import { render, screen } from '@testing-library/react';
import GameIcon from './GameIcon';
import { BrowserRouter as Router } from 'react-router-dom';

describe('GameIcon', () => {
    test('renders as listitem', () => {
        render(<Router><ul><GameIcon path="/" text="Test" /></ul></Router>);
        const listitems = screen.getAllByRole('listitem');
        expect(listitems).toHaveLength(1);
        expect(listitems[0]).toBeInTheDocument();
    });

    test('renders link to path', () => {
        const path = "/"
        render(<Router><ul><GameIcon path={path} text="Test" /></ul></Router>);
        const link = screen.getByRole('link', {name: /Test/i});
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', path)
    });
});
