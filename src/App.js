import React from 'react';
import Navigation from './components/Navigation'
import AppBody from './components/AppBody'

class App extends React.Component {

  render(){
      return (
        <div>
          <Navigation/>
          <AppBody/>
        </div>
    );
  }
}

export default App;
