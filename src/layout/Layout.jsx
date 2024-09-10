import React from 'react';
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

const Layout = ({setMode , mode}) => {
    return (
        <div>
            <Content/>
            <Sidebar/>
            <Navbar setMode={setMode} mode={mode}/>
        </div>
    );
};

export default Layout;