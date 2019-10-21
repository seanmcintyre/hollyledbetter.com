import React, { SFC } from 'react';
import styled from 'styled-components';

export const HeaderCard: SFC = ({ children, ...props }) => {
  return <HeaderCardStyled>{children}</HeaderCardStyled>;
};

const HeaderCardStyled = styled.h2`
  display: block;
  margin: 0 auto;
  font-size: 1.4em;
  max-width: 90%;
  line-height: 1.5;
  font-weight: 700;
  z-index: 100;
  position: relative;
  color: #000;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.1);
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05),
    0 10px 20px -10px rgba(0, 0, 0, 0.15);
`;
