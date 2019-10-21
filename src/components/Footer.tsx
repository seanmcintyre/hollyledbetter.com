import Router from 'next/router';
import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../pages/_app';

export function Footer(props: any) {
  const { quote } = useContext(AppContext);

  return (
    <footer {...props}>
      <Wave viewBox="0 0 1000 100">
        <path
          className="st0"
          d="M-7,73.3c0,0,134-40.7,245.3-15.5c174,39.4,280,38.2,434.7-29.7c157.7-69.2,351,28.8,351,28.8"
        />
      </Wave>

      <Quote quote={quote} />

      <div>
        <FooterLink link="bio" />
        <FooterLink link="schedule" />
        <FooterLink link="private" />
        <FooterLink link="contact" />
        <FooterLink link="resources" />
      </div>
    </footer>
  );
}

const Wave = styled.svg`
  .st0 {
    fill: none;
    stroke: #000000;
    stroke-miterlimit: 10;
  }
`;

function FooterLink({ link, ...props }: any) {
  return (
    <a
      href={'/' + link}
      onClick={event => {
        event.preventDefault();
        Router.push('/' + link);
      }}
      {...props}
    >
      {link}.
    </a>
  );
}

function Quote({ quote: { text, speaker }, ...props }: any) {
  return (
    <QuoteStyled {...props}>
      <TextStyled>{text}</TextStyled>
      <Author>{speaker}</Author>
    </QuoteStyled>
  );
}

const QuoteStyled = styled.div`
  max-width: 600px;
  margin: 20px auto;
  position: relative;
  display: block;
  padding: 0 30px;
`;

const TextStyled = styled.span`
  display: block;
  font-weight: 300;
  font-size: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  letter-spacing: -0.167px;
  color: rgba(0, 0, 0, 0.667);
  line-height: 1.5;
  width: 100%;
`;

const Author = styled.span`
  display: block;
  font-size: 25px;
  padding: 10px 0;
  line-height: 1.5;
  font-weight: 800;
  text-align: right;
  letter-spacing: 0.167px;
  color: #000;
  width: 100%;
`;
