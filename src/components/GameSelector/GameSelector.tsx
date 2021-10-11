import './GameSelector.css';

interface IGameSelectorProps {
    children?: any;
}

const GameSelector = (props: IGameSelectorProps) => (
    <ul className="game-selector">
        {props.children}
    </ul>
);

export default GameSelector;
