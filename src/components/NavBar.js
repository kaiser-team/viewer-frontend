import React from 'react';
import { xnatIsReachable, dcm4cheeIsReachable } from '../utils/pingServices';
import {ReactComponent as CheckLogo} from '../assets/checkMark/checkMark.svg';
import {ReactComponent as LoadingLogo} from '../assets/loading/loading.svg';

import config from '../config/servicesConfig';

import './NavBar.scss';
import '../assets/checkMark/checkMark.css';
import '../assets/loading/loading.scss';

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
        console.log('Alright ill check if its up');
        await this.checkReachable()
    }

    async checkReachable() {
        const xnat = await xnatIsReachable();
        const dcm4chee = await dcm4cheeIsReachable();
        await this.setStateAsync({
            xnatReachable: xnat,
            dcm4cheeReachable: dcm4chee
        });
    }

    render() {
        return (
            <div className='nav-bar'>
                <div className='logo-container'>
                    LOGO
                </div>
                <div className='options'>
                    <div className='options'>
                        <div className='option' onClick={() => this.checkReachable()}>
                            {this.state.xnatReachable === true ? <CheckLogo/> : <LoadingLogo/>}
                        </div>
                        <a
                        target = '_blank'
                        rel='noopener noreferrer'
                        href= {config.xnatURL}
                        className='option'
                        >XNAT</a>
                    </div>
                    <div className='options'>
                        <div className='option' onClick={()=> this.checkReachable()}>
                            {this.state.dcm4cheeReachable === true ? <CheckLogo/> : <LoadingLogo/>}
                        </div>
                        <a
                        target = '_blank'
                        rel='noopener noreferrer'
                        href={config.dcm4cheeURL}
                        className='option'
                        >DCM4CHEE</a>
                    </div>
                </div>
            </div>
        )
    };
}

export default NavBar;