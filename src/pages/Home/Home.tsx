import logo from './logo.svg';
import './Home.css';

const Home = () => (
    <div className="Home">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="Home-link">
            Learn React
        </a>
    </div>
);

export default Home;
