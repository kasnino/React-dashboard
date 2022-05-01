import React from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar'
export default function App() 
{

  return (
      <div>
            <Sidebar></Sidebar>
            <Dashboard />
      </div>
  )
}

const Div = styled.div`
.menu{
  position:relative;
  width:100%;
  height:100%;
}
  position: relative;
`;