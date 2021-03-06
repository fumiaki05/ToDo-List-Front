import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme/theme";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Routes />
    </ThemeProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React hoge
    //     </a>
    //     <button className="square">This is Test Button </button>
    //     <button className="square">This is Test Button </button>
    //     <button className="square">This is Test Button </button>
    //   </header>
    // </div>
  );
}

export default App;
