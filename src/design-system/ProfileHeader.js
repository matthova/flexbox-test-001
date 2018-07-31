import React from 'react';
import styled from 'styled-components';

const ProfileHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  flex: 1;
`

const Circle = styled.div`
  min-height: 40px;
  min-width: 40px;
  border-radius: 20px;
  background: white;
  margin: 10px
`

export const ProfileHeader = () => (
  <ProfileHeaderStyle><h1>Your profile</h1><Circle /></ProfileHeaderStyle>
);
