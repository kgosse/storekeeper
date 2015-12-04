/**
 * Created by kevin gosse on 04/12/2015.
 */
import React from 'react';

class MainNav extends React.Component{
    render(){
        return (
            <nav className="main-nav">
                <a>Dashboard</a>
                <a className="active">Orders</a>
                <a>Catalog</a>
            </nav>
        )
    }
}

export default MainNav;
