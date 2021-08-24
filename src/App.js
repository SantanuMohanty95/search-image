import React, { Component } from 'react';
import './App.css';
import Search from './Components/search/search';
import { createMuiTheme,  MuiThemeProvider } from '@material-ui/core/styles/';

class App extends Component{
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <Search />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
