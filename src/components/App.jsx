import React from 'react';
import MainHeader from './main_header.jsx';
import Page from './Page.jsx';
import Orders from './Orders.jsx';

class App extends React.Component{
    render(){
        return (
            <div className="app">
                <MainHeader />
                <Page>
                    {this.props.children}
                </Page>
            </div>
        )
    }
}

export default App;

