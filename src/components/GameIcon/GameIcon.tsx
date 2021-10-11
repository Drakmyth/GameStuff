import './GameIcon.css';
import { Link } from 'react-router-dom';

interface IGameIconProps {
    path: string
    text: string
}

const GameIcon = (props: IGameIconProps) => (
    <li className="game-icon"><Link to={props.path}>{props.text}</Link></li>
);

export default GameIcon;
