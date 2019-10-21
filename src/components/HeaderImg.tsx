import React, { SFC } from 'react';
import styled from 'styled-components';

export const HeaderImg: SFC<{ src?: string }> = ({
  children,
  ...props
}) => {
  return <HeaderImgStyled {...props}>{children}</HeaderImgStyled>;
};

const HeaderImgStyled = styled.img`
  max-width: 350px;
  float: left;
  -ms-grid-row-align: center;
  align-self: center;
  margin: 0 auto;
  -webkit-transform: translate(30px, 30px);
  transform: translate(30px, 30px);

  display: block;
  max-width: 350px;
  margin: 0 auto -80px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05),
    0 10px 20px -10px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
`;
