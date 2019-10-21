import React, { SFC } from 'react';
import styled from 'styled-components';

export const Paragraph: SFC = ({ children, ...props }) => {
  return <ParagraphStyled>{children}</ParagraphStyled>;
};

const ParagraphStyled = styled.p`
  font-size: 1.1em;
  line-height: 1.67;
  font-weight: 400;
  padding: 30px 30px 0;
  margin-bottom: 0;
  color: #000;
`;
