import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Forms from './Components/Forms/Forms';

class App extends React.Component {
  render(){
      return (
        <div className="App">
          <Header />
          <Forms />
        </div>
      );
  }
}

export default App;
