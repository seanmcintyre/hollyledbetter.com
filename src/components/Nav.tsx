import React, {
  ReactNode,
  Children,
  useContext,
  useEffect,
  useLayoutEffect,
} from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';
import Router from 'next/router';
import { AppContext, AppDispatchContext } from '../../pages/_app';
import { black } from '../colors';

interface NavProps {
  children?: ReactNode;
}

export function Nav({ children, ...props }: NavProps) {
  const { loaded } = useContext(AppContext);
  const dispatch = useContext(AppDispatchContext);

  if (!loaded) setTimeout(() => dispatch({ type: 'LOADED' }), 2000);

  return <NavStyled {...props}>{children}</NavStyled>;
}

interface Props {
  href: string;
  children?: ReactNode;
}

export function Link({ href, children }: Props) {
  const { loaded } = useContext(AppContext);

  return (
    <LinkStyled
      href={href}
      loaded={loaded}
      onClick={(event: any) => {
        event.preventDefault();
        Router.push(href);
      }}
    >
      {children}
    </LinkStyled>
  );
}

const slideIn = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-10%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
`;

const LinkStyled = styled.a<any>`
  display: block;
  margin-bottom: 2.618em;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  transition: 1s;
  cursor: pointer;
  border: 1px solid ${rgba(black, 0.05)};
  margin: 10px;
  border-radius: 5px;
  padding: 10px 5px;
  min-width: calc(50% - 20px);
  background: rgb(250, 244, 242);
  box-shadow: 0 10px 20px -9px ${rgba(black, 0.25)},
    0 -6px 18px -12px ${rgba(black, 0.15)};
  transition: 120ms ease-in-out;
  cursor: pointer;

  ${p =>
    !p.loaded &&
    css`
      animation: ${slideIn} 500ms ease-in-out backwards;
    `}

  ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
    i => css`
      &:nth-child(${i}) {
        animation-delay: ${500 + (i + 1) * 40 - 100 / (i + 1)}ms;
      }
    `,
  )}

  @media screen and (min-width: 800px) {
    min-width: 0px;
    margin: 15px;
    padding: 20px 5px;
    min-width: 100%;
  }

  @media screen and (min-width: 1100px) {
    min-width: 0px;
    margin: 20px;
  }

  > svg {
    display: block;
    margin: 0 auto;
    transition: 500ms;
    height: 10vmin;
  }

  &:hover {
    color: ${rgba(204, 156, 14, 1)};
    transform: scale(1.0334) rotate(0.33deg);

    svg {
      fill: ${rgba(204, 156, 14, 1)} !important;

      * {
        fill: ${rgba(204, 156, 14, 1)} !important;
      }
    }
  }
`;

const NavStyled = styled.nav`
  font: 800 0.5em/1 system-ui;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${rgba(black, 0.8)};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: calc(50vmin + 320px);
  margin: 0 auto;

  @media screen and (min-width: 800px) {
    min-width: 760px;
  }

  @media screen and (min-width: 1100px) {
    color: ${rgba(black, 0.667)};
    font: 800 0.618em/1 system-ui;
    min-width: 720px;
  }
`;
