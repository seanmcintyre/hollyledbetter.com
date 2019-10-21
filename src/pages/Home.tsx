import React from 'react';
import styled from 'styled-components';
import { Page, Testimonial as T } from '../components';

export const Home = () => (
  <Page>
    <div className="home-page">
      <Testimonial source="Laurie">
        After a single class with Holly, I was shocked by the healing
        powers that this practice bestows. I have been encouraged by
        her calm assurance, passion and compassion. Yoga is changing
        my life for the better. I have Holly to thank for that.
      </Testimonial>

      <div className="home-imgs">
        <img src="/static/h1.jpg" />
        <img src="/static/h2.jpg" />
      </div>
    </div>
  </Page>
);

const Testimonial = styled(T)`
  max-width: 740px;
  margin: 30px auto;
  margin-bottom: 60px;
`;
