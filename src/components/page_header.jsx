/**
 * Created by kevin gosse on 04/12/2015.
 */
import React from 'react';

class PageHeader extends React.Component{
    render(){
        return (
            <header className="page-header">
                {this.props.children}
            </header>
        )
    }
}

export default PageHeader;
