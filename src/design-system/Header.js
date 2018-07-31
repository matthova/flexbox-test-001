import React from 'react';
import styled from 'styled-components';

import { NavBar } from './NavBar';
import { HeaderTitle } from './HeaderTitle';
import { ProfileHeader } from './ProfileHeader';

const HeaderStyle = styled.div`
  flex: 0 0 100px;
  background: hsl(0, 50%, 50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`

export const Header = () => (
  <HeaderStyle>
    <NavBar/>
    <HeaderTitle />
    <ProfileHeader />
  </HeaderStyle>
);
