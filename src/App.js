import React, {State} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { TableList, TableListItem } from 'react-viewerbase';

function App() {
  return (
    <div className="App">
      <NavBar />
      <State
        initial={{
          selectedIndex: null,
          listItems: [
            { label: 'Brain Left' },
            { label: 'Brain Right' },
            { label: 'Heart Left' },
            { label: 'Heart Right' },
          ],
        }}>
          {({ state, setState }) => (
            <TableList headerTitle="Example Table List Header">
              {state.listItems.map((item, index) => {
                return (
                  <TableListItem
                    key={`item_${index}`}
                    itemClass={state.selectedIndex === index ? 'selected' : ''}
                    itemIndex={index}
                    onItemClick={() => alert('item clicked')}
                  >
                    <label>{item.label}</label>
                  </TableListItem>
                )
              })}
            </TableList>
        )}
        </State>
      
    </div>
  );
}

export default App;
