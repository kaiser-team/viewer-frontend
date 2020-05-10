import React from 'react';
import { TableList, TableListItem } from 'react-viewerbase';


class Table extends React.Component {
    state = {
        selectedIndex: null,
        listItems: [
        { label: 'Brain Left' },
        { label: 'Brain Right' },
        { label: 'Heart Left' },
        { label: 'Heart Right' },
        ],
    }
    render() {
        return (
            <TableList>
                {this.state.listItems.map((item, index) => {
                    return (
                        <TableListItem
                          key={`item_${index}`}
                          itemClass={this.state.selectedIndex === index ? 'selected' : ''}
                          itemIndex={index}
                          onItemClick={() => alert('item clicked')}
                        >
                          <label>{item.label}</label>
                        </TableListItem>
                    )
                })
            }
            </TableList>
        )
    }
}

export default Table;