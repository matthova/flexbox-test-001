import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  flex: 0 0 80px;
  background: hsl(60, 50%, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`

export const Footer = () => (
  <FooterStyle>
    <h1>Awesome Things™</h1>
  </FooterStyle>
)