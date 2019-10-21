import React, { SFC } from 'react';
import styled, { keyframes } from 'styled-components';
import Head from 'next/head';
import {
  Holly,
  Schedule,
  Private,
  Contact,
  Resources,
} from '../pages/icons';

import { GlobalStyle } from '../styles';
import { Nav, Link } from './Nav';
import { black } from '../colors';
import { rgba } from 'polished';
import { Footer } from './Footer';

interface Props {
  title?: string;
  style?: any;
}

export const Page: SFC<Props> = ({
  children,
  title = 'NYC',
  ...props
}) => {
  return (
    <>
      <Head>
        <title>Holly Ledbetter Yoga | {title}</title>
      </Head>
      <AppStyled>
        <GlobalStyle />
        <div className="landing">
          <a href="/">
            <Logo src="/static/logo.png" />
          </a>
          <Nav>
            <Link href="/bio">
              <Holly />
              Holly
            </Link>
            <Link href="/schedule">
              <Schedule />
              Schedule
            </Link>
            <Link href="/private">
              <Private />
              Private
            </Link>
            <Link href="/contact">
              <Contact />
              Get in touch
            </Link>
            <Link href="/resources">
              <Resources />
              Resources
            </Link>
          </Nav>
        </div>

        <PageStyled {...props}>{children}</PageStyled>

        <Footer />
      </AppStyled>
    </>
  );
};

const Logo = styled.img`
  width: 140px;
  height: 140px;
  padding: 20px;
  border-radius: 50%;
  transition: 210ms;
  border: 1px solid rgba(#fff, 0);
  cursor: pointer;

  &:hover {
    background: rgba(#fff, 0.2);
    border: 1px solid rgba(#fff, 0.667);
    transform: scale(1.0334) rotate(3deg) translateY(-2px);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PageStyled = styled.article`
  animation: 300ms ${fadeIn} ease-in-out;
  min-height: calc(100vh - 200px);
  max-width: 60rem;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
  }
`;

const AppStyled = styled.div`
  .landing {
    padding: 10px 50px 30px;
    position: relative;
    z-index: 100;
    text-align: left;
    background: rgb(244, 239, 233);
    width: 100%;
    text-align: center;

    @media screen and (min-width: 800px) {
      padding: 50px;
    }

    /* svg {
      width: 60px;
      height: 50px;
      margin-bottom: 0.618em;
      overflow: visible;
      transition: 1s;
      /* stroke: #000; */
      /* fill: none; */
      stroke-width: 70;
    } */

    h1 {
      font: 700 1.618em/1.334 system-ui;
      margin-bottom: 0.618em;
      color: ${rgba(black, 0.667)};
      max-width: 800px;
      margin: 0.618em auto;
    }
  }

  footer {
    padding: 10px 30px;

    > div {
      max-width: 600px;
      margin: 80px auto 50px;
      display: flex;
      position: relative;
      flex-wrap: wrap;
      cursor: pointer;

      a {
        min-width: 50%;
        display: block;
        padding: 10px 5px;
        font: 600 1em/1em system-ui;
        margin-bottom: 0.618em;
        border-bottom: 3px inset ${rgba(black, 0)};
        cursor: pointer;
        transition: 80ms;

        &:hover {
          border-bottom: 3px inset ${rgba(black, 0.334)};
        }
      }
    }

    a:visited {
      color: #000;
    }
  }

  .instagram {
    display: flex;
    width: 100%;
    background: white;

    > a {
      display: inline-block;
      margin: 0;
      min-width: 20%;
      width: 20%;

      img {
        max-width: 100%;
      }
    }
  }

  .home-page {
    max-width: 800px;
    margin: 20px auto -70px;
    display: block;
    //overflow: hidden;
    text-align: center;

    video {
      width: 100%;
      opacity: 0.3334;
      pointer-events: none;
    }

    .home-imgs {
      @media screen and (min-width: 640px) {
        box-shadow: 0 0 20px 0 rgba(#000, 0.05),
          0 10px 20px -10px rgba(#000, 0.15);
        display: flex;
      }
    }

    img {
      display: block;
      align-self: center;
      border-radius: 3px;
      margin: 20px auto 20px;
      max-width: 300px;
      box-shadow: 0 0 20px 0 rgba(#000, 0.05),
        0 10px 20px -10px rgba(#000, 0.15);

      @media screen and (min-width: 640px) {
        margin: 0;
        box-shadow: none;
        width: 50%;
        max-width: 400px;

        &:nth-child(1) {
          border-radius: 3px 0 0 3px;
        }
        &:nth-child(2) {
          border-radius: 0 3px 3px 0;
        }
      }
    }
  }
`;
