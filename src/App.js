import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { TableList } from 'react-viewerbase';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TableList headerList = "Example Table List Header">
        {/* Add TableListItem in here*/}
      </TableList>
    </div>
  );
}

export default App;
