import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import './Table.scss'

class Table extends React.Component {
    state = {
        user: {
            username: 'admin',
            password: 'admin'
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    async componentDidMount(){
        axios.get('http://localhost:443/getExperiments')
        .then(res => {
            var url = 'http://localhost:80/VIEWER?' + queryString.stringify(res.data) 
            this.setState({
                ...this.state,
                experiments: {
                    ...res.data,
                    url
                }
                
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.experiments ? 
                    <a
                    target = '_blank'
                    rel='noopener noreferrer'
                    href= {this.state.experiments.url}
                    >EXPERIMENT - {this.state.experiments.experimentLabel}</a>
                    : null
                }
            
            </div>
            
            
        )
        
    }
}

export default Table;