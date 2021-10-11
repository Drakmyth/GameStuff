import { render, screen } from '@testing-library/react';
import SideBar from './SideBar';

describe('SideBar', () => {
    test('renders children', () => {
        render(<SideBar><button>Test</button></SideBar>);
        const button = screen.getByRole('button', {name: /Test/i});
        expect(button).toBeInTheDocument();
    });
});
