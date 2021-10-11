import { render, screen } from '@testing-library/react';
import GameSelector from './GameSelector';

describe('GameSelector', () => {
    test('renders as unordered list', () => {
        render(<GameSelector />);
        const lists = screen.getAllByRole('list').filter(list => list.nodeName === 'UL');
        expect(lists).toHaveLength(1);
        expect(lists[0]).toBeInTheDocument();
    });

    test('renders children', () => {
        render(<GameSelector><li>Test</li></GameSelector>);
        const listitems = screen.getAllByRole('listitem').filter(li => li.textContent === 'Test');
        expect(listitems).toHaveLength(1);
        expect(listitems[0]).toBeInTheDocument();
    });
});
