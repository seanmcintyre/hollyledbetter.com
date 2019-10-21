import React from 'react';
import styled from 'styled-components';
import { Page, Book, Testimonial } from '../components';

export const Resources = () => (
  <Page title="Resources">
    <Testimonial source="Gabriela">
      A wonderful young lady with grace and passion in every movement.
      Her love and understanding of Yoga makes it easy and rewarding
      for us to learn and practice.
    </Testimonial>

    <Books>
      <Book
        src="/static/lightonyoga.png"
        alt="Light on Yoga by B.K.S. Iyengar"
      />
      <Book
        src="/static/deathanddying.jpg"
        alt="On Death and Dying by Elisabeth Kubler-Ross"
      />
      <Book
        src="/static/iyengarway.jpg"
        alt="Yoga The Iyengar Way by Silva, Mira and Shyametha"
      />
      <Book
        src="/static/radicalacceptance.png"
        alt="Radical Acceptance by Tara Brach, Ph.D."
      />
      <Book
        src="/static/whenthingsfallapart.png"
        alt="
          When Things Fall Apart, Heart Advice for Difficult Times by
          Pema Chodron
        "
      />
      <Book
        src="/static/lightonlife.png"
        alt="Light on Life B.K.S. Iyengar"
      />
      <Book
        src="/static/thebodykeepsscore.png"
        alt="
          The Body Keeps he Score, Brain, Mind, and Body in the
          Healing of Trauma by Bessel Van Der Kolk, M..D.
        "
      />
      <Book
        src="/static/thewisdomofnoescape.png"
        alt="The Wisdom of No Escape by Pema Chodron"
      />
      <Book
        src="/static/yogaanatomy.jpg"
        alt="Yoga Anatomy by Kaminoff and Matthews"
      />
    </Books>
  </Page>
);

const Books = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 640px) {
    padding: 50px;
  }
`;
