import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Warframe from './pages/Warframe/Warframe';
import Home from './pages/Home/Home';
import SideBar from './components/SideBar/SideBar';
import GameSelector from './components/GameSelector/GameSelector';
import GameIcon from './components/GameIcon/GameIcon';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SideBar>
        <GameSelector>
          <GameIcon path="/" text="GS" />
          <GameIcon path="/warframe" text="W" />
        </GameSelector>
      </SideBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/warframe" component={Warframe} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
