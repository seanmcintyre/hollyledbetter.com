import React from 'react';
import styled from 'styled-components';
import { black } from '../colors';
import { rgba } from 'polished';

export const Class = ({
  day,
  start,
  end,
  location,
  description,
  href,
  level,
  ...props
}: any) => {
  return (
    <Day>
      <h2>{day}</h2>
      <time>
        {start} - {end}
      </time>
      <div className="level">{level}</div>

      <div className="location">{location}</div>
      <span className="description">{description}</span>

      <a target="_blank" href={href}>
        learn more or register &raquo;
      </a>
    </Day>
  );
};

const Day = styled.div`
  border-radius: 5px;
  padding: 20px 30px;
  margin: 30px 0;
  min-width: 100%;
  background: rgb(253, 248, 246);
  box-shadow: 0 10px 20px -9px ${rgba(black, 0.25)},
    0 -8px 19px -13px ${rgba(black, 0.4)};
  transition: 120ms ease-in-out;
  cursor: pointer;
  //width: calc(50% - 60px);
  position: relative;

  &.paused {
    opacity: 0.25;
    pointer-events: none;
  }

  @media screen and (min-width: 800px) {
    min-width: 0px;
    padding: 30px 50px;
    margin: 30px;
  }

  .description {
    display: none;
    line-height: 1.4;
    margin-bottom: 10px;

    @media screen and (min-width: 640px) {
      display: block;
    }
  }

  .location {
    font: 700 1.0618em/1.2 system-ui;
    letter-spacing: -0.01em;
    margin: 20px 0 15px;
    border-top: 1px solid rgba(#000, 0.1);
    padding-top: 20px;

    @media screen and (min-width: 640px) {
      font: 700 1.309em/1.2 system-ui;
    }
  }

  &:hover {
    transform: scale(1.01667) rotate(0.167deg);
  }

  * {
    position: relative;
    z-index: 1;
  }

  h2 {
    font: 700 1.618em/1 system-ui;
    margin-bottom: 16px;

    @media screen and (min-width: 640px) {
      font: 700 2em/1 system-ui;
    }
  }

  time,
  .price,
  .level {
    font: 800 0.618em/1 system-ui;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    opacity: 0.4;
    margin: 10px 1.5px;
    display: block;
    //color: white;
  }

  a {
    color: rgb(236, 197, 63);
    font: 800 0.5em/1 system-ui;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    @media screen and (min-width: 640px) {
      font: 800 0.618em/1 system-ui;
    }
  }
`;
