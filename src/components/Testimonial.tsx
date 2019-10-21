import styled, { css } from 'styled-components';
import { SFC } from 'react';

export const Testimonial: SFC<any> = ({
  children,
  source,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Quote>{children}</Quote>
      <Source>{source}</Source>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  position: relative;
  padding: 0 20px;
  overflow: visible;
  margin: 2rem auto 2rem;
  max-width: 45rem;
  text-align: center;
`;

const Quote = styled.h2`
  font-weight: 600;
  font-size: 1.1em;
  line-height: 1.25;
  letter-spacing: 0.01em;
  position: relative;

  @media screen and (min-width: 640px) {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.3334;
  }

  &:before,
  &:after {
    position: absolute;
    font-family: 'Garamond';
    font-size: 5em;
    opacity: 0.25;
  }

  &:before {
    content: '\\201C';
    top: -40px;
    left: -10px;

    @media screen and (min-width: 640px) {
      top: -60px;
      left: -20px;
    }
  }

  &:after {
    content: '\\201D';
    bottom: -100px;
    right: 5px;

    @media screen and (min-width: 640px) {
      bottom: -115px;
      right: 0;
    }
  }
`;

const Source = styled.span`
  margin-top: 10px;
  text-align: right;
  display: inline-block;
  font-weight: 800;
  font-size: 0.75em;
  line-height: 1;
  letter-spacing: 0.05em;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  border-top: 1px solid rgba(#000, 0.334);
  padding: 10px;
`;
