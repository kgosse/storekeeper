/**
 * Created by kevin gosse on 04/12/2015.
 */
import React from 'react';
import { Link } from 'react-router';

const ACTIVE = {color: '#FF7A50' };

class MainNav extends React.Component{
    render(){
        return (
            <nav className='main-nav'>
                <Link to='/dashboard' activeStyle={ACTIVE}>Dashboard</Link>
                <Link to='/orders' activeStyle={ACTIVE}>Orders</Link>
                <Link to='/catalog' activeStyle={ACTIVE}>Catalog</Link>
            </nav>
        )
    }
}

export default MainNav;
