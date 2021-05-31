import React from 'react';
import './SidebarOption.css';
import './Sidebar.js'


function SidebarOption({active,Icon, text}) {
    return (
        <div className="sidebarInner">
        <div className={`sidebarOption ${active && 'SidebarOption--active'}`}>
            
            <Icon/>
            <h2>{text}</h2>
            
        </div>
        </div>
    )
}

export default SidebarOption
