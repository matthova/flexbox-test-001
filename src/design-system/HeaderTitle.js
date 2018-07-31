import React from 'react';
import styled from 'styled-components';

const HeaderTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis:initial;
  height: 100%;
  flex: 2 0 auto;
`

export const HeaderTitle = ({ title = 'Awesome App Title' }) => (
  <HeaderTitleStyle><h1>{title}</h1></HeaderTitleStyle>
);

