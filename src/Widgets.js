import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widget_search">
                <SearchIcon className="widget_searchIcon"/>
                <input className="widget_searchBox" placeholder="Search" type="search" name="q" />
            </div>
            
        </div>
    )
}

export default Widgets
