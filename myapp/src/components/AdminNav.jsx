import React, { Component } from 'react';
import './Admin.css';
import { Link, Outlet } from 'react-router-dom';

class AdminNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggled: false
        };
    }

    handleToggleClick = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }));
    }

    render() {
        const { isToggled } = this.state;

        return (

            <div>
                <div className='btn-menu'>
                <button className=" btn btn-primary m-2 my-3 w-25 btn-toggle-menu" onClick={this.handleToggleClick}>
                    
                </button>

</div>
                <div id="wrapper" className={`wrapper-content ${isToggled ? 'toggled' : ''}`}>

                    <div>

                        <div id="sidebar-wrapper">
                            <ul className="sidebar-nav">
                                <li className="sidebar-brand">
                                    <a href="#">
                                        eCOMMERCE
                                    </a>
                                </li>
                                <li>
                                    <Link to='allUsers'>Users</Link>
                                </li>
                                <li>
                                    <a href="#">Shortcuts</a>
                                </li>
                                <li>
                                    <a href="#">Overview</a>
                                </li>
                                <li>
                                    <a href="#">Events</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div id="page-content-wrapper">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <Outlet/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default AdminNav
