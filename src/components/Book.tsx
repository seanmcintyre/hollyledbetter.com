import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { black } from '../colors';

interface Props {
  src?: string;
  alt?: string;
}

export function Book({ src, alt, ...props }: Props) {
  return (
    <Styled>
      <img src={src} alt={alt} />
      <span>{alt}</span>
    </Styled>
  );
}

const Styled = styled.div`
  width: calc(50% - 30px);
  font-weight: 700;
  margin: 20px 10px;
  border-radius: 5px;
  padding: 0;
  max-width: 220px;
  max-height: 330px;
  background: transparent;
  transition: 120ms ease-in-out;
  cursor: pointer;
  position: relative;

  @media screen and (min-width: 640px) {
    width: auto;
    margin: 30px;
  }

  img {
    transform: scale(1.0167);
    box-shadow: 0 15px 30px -12px ${rgba(black, 0.33)};

    + span {
      display: none;
    }
  }

  &:hover {
    transform: scale(1.0334) rotate(0.67deg);
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
`;
