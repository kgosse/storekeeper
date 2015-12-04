import React from 'react';
import MainHeader from './main_header';
import Page from './Page';

class App extends React.Component{
    render(){
        return (
            <div className="app">
                <MainHeader />
                <Page>
                    <h1>Page title</h1>
                </Page>
            </div>
        )
    }
}

export default App;

