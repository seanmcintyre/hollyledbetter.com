import React, { SFC } from 'react';
import styled from 'styled-components';
import { Page } from '../components';
import { Email, Phone, Bottle, Pigeon } from './icons';
import { rgba } from 'polished';
import { black } from '../colors';

const Method: SFC<any> = ({
  href,
  icon,
  time,
  children,
  ...props
}) => (
  <MethodStyled href={href} {...props}>
    <Icon>{icon}</Icon>
    <span>{children}</span>

    <Time>average response time</Time>
    <Wait>
      <span>24</span>
      {time}
    </Wait>
  </MethodStyled>
);

const MethodStyled = styled.a`
  background: rgb(250, 244, 242);
  box-shadow: 0 10px 20px -9px rgba(0, 0, 0, 0.25);
  transition: 120ms ease-in-out;
  cursor: pointer;
  padding: 30px;
  margin: 20px 20px 0;
  float: left;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  width: calc(50% - 40px);
  min-width: 300px;
  min-height: 235px;

  &:hover {
    transform: scale(1.0334) rotate(0.33deg);
  }
`;

const Methods = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Icon = styled.div`
  width: 50px;
  display: block;
  margin: 0 auto;

  + span {
    font: 800 0.809em/1 system-ui;
    font-weight: 800;
    letter-spacing: 0px;
    color: ${rgba(black, 0.75)};
  }
`;

const Time = styled.span`
  display: block;
  font: 800 0.382em/1 system-ui;
  /* text-transform: uppercase; */
  /* letter-spacing: 0.1em; */
  color: ${rgba(black, 0.2)};
  margin: 30px 10px 0px;
  padding: 0 0 8px;
  border-bottom: 1px dashed ${rgba(black, 0.1)};
`;

const Wait = styled.span`
  display: block;
  font: 800 0.5em/1 system-ui;
  /* text-transform: uppercase; */
  /* letter-spacing: 0.05em; */
  padding: 5px 0;

  > span {
    font: 800 2.618em/1 system-ui;
    display: inline;
    padding: 0 5px;
  }
`;

export const Contact = () => (
  <Page title="Contact" style={{ textAlign: 'center' }}>
    <h2>
      Lets's practice! Please feel free to contact me via email or
      phone.
    </h2>

    <ContactStyled>
      <Methods>
        <Method
          href="mailto:hollymledbetter@gmail.com"
          icon={<Email />}
          time="hours"
        >
          hollymledbetter@gmail.com
        </Method>
        <Method
          href="tel:1-425-301-7015"
          icon={<Phone />}
          time="hours"
        >
          1-425-301-7015
        </Method>
        <Method
          href="https://en.wikipedia.org/wiki/Homing_pigeon"
          target="_blank"
          icon={<Pigeon />}
          time="days"
        >
          carrier pigeon
        </Method>
        <Method
          href="https://en.wikipedia.org/wiki/Message_in_a_bottle"
          target="_blank"
          icon={<Bottle />}
          time="years"
        >
          message in a bottle
        </Method>
      </Methods>
      <img
        src="/static/4.jpg"
        style={{ width: '600px', margin: '3rem auto -14rem' }}
      />
    </ContactStyled>
  </Page>
);

const ContactStyled = styled.div`
  max-width: 45rem;
  text-align: center;
  margin: 0 auto;

  svg {
    max-width: 5rem;
  }
`;
