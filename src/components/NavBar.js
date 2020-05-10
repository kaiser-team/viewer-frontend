import React from 'react';
import { xnatIsReachable, dcm4cheeIsReachable } from '../utils/pingServices';

class NavBar extends React.Component {

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    constructor(props){
        super(props);

        this.state = {
            xnatReachable: false,
            dcm4cheeReachable: false
        }
    }

    async componentDidMount(){
       const xnat =  await xnatIsReachable();
       const dcm4chee = await dcm4cheeIsReachable();

       await this.setStateAsync({
           xnatReachable: xnat,
           dcm4cheeReachable: dcm4chee
       });
    }

    render() {
        return (
            <div className='nav-bar'>
                {
                this.state.xnatReachable === true ? 
                <button 
                onClick={() => {
                    window.open('http://localhost:80', '_blank')
                }}
                >XNAT</button> : <span>XNAT is unavailable</span>
                }

                {
                this.state.dcm4cheeReachable === true ?
                <button
                onClick={() => {
                    window.open('http://localhost:8080/dcm4chee-arc/ui2', '_blank')
                }}
                >DCM4CHEE</button> : <span>DCM4CHEE is unavailable</span>
                }
                
            </div>
        )
    };
}
// dcm4cheeIsReachable() ?
//             <button>DCM4CHEE</button> : <span>DCM4CHEE is unavailable</span>

export default NavBar;
