import React from 'react';
import styled from 'styled-components';

const NavBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const NavBarItemStyle = styled.div`
  height: 100%;
  align-items: center;
  padding: 0 16px;
  font-size: 20px;
  font-weight: 800;
  flex: 1 1 auto;
`;

const paths = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Other Page',
    path: '/other'
  },
  {
    name: 'Third thing',
    path: '/awesome'
  }
];

export const NavBar = () => (
  <NavBarStyle>
    {paths.map(path => (
      <NavBarItemStyle key={path.path}>{path.name}</NavBarItemStyle>
    ))}
  </NavBarStyle>
)