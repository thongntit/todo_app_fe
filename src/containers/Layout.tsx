import AppBar from 'components/AppBar';
import Sidebar from 'components/SideBar';
import React, { useState } from 'react';
const Layout: React.FC = (props) => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar openSideBar={toggleSidebar} />
      <Sidebar open={open} />
      {props.children}
    </>
  );
};

export default Layout;
