import React from 'react';
import Table from './table';
import { RealAuth } from '../services';
import { useHistory, Link } from 'react-router-dom';
export default function Dashboard(){
    let history = useHistory();
    return(
        <div className="container dashboard">
            <div className="menu">
                <ul>
                    <Link to="/dashboard"><li>Dashboard</li></Link>
                    <li onClick={() => {
                    RealAuth.signout(() => history.push("/"));
                    }}>Logout</li>
                </ul>
            </div>
            <div className="page">
                <Table/>
            </div>
        </div>
    );

}