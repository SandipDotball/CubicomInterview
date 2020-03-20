import React from 'react';
import './styles/App.css';
import Routers from './routes/Routers';
import { BrowserRouter as Router } from 'react-router-dom';
import Messages from './components/commons/Messages';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Messages />
        <Router>
          <Routers />
        </Router>
      </div>
    );
  }
}

export default App;
