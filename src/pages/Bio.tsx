import React from 'react';
import {
  HeaderCard,
  HeaderImg,
  Page,
  Paragraph,
} from '../components';
import styled from 'styled-components';

export const Bio = () => (
  <Page title="Bio">
    <HeadderStyled>
      <HeaderImg src="/static/9.jpg" />
      <HeaderCard>
        My classes celebrate each practitioner’s unique harmony of
        mind and body as well as the strong, sustainable community
        that is inherently created through the practice of yoga.
      </HeaderCard>
    </HeadderStyled>
    <div>
      <Paragraph>
        Though my teaching practice focuses on wholeness, contentment
        and ease, I value inviting your full experience into the room
        – life is certainly not always easeful! I am fueled by the
        thrill of growing together as a sangha of yogis, learning from
        my students as much as they learn from me.
      </Paragraph>
      <Paragraph>
        I came to New York to pursue a BFA in Dance from Tisch School
        of the Arts where I began studying yoga under TaraMarie Perri
        and have since completed my 300-hour teacher training through
        the Perri Institute for Mind and Body. I had been dancing for
        18 years when I was diagnosed with bilateral hip dysplasia and
        was made to reassess my priorities for a body now experiencing
        chronic pain. My yoga and meditation practices rapidly
        deepened and I continue to be amazed at the body’s ability to
        work with its own limitations in harmony with the mind. I look
        forward to being curious about these realities together.
      </Paragraph>
      <Paragraph>
        I am also involved with the social meditation group in the
        Shambhala tradition of Tibetan Buddhism. This practice of
        intentional speech and listening, holding caring space for
        others, and focusing full-bodied attention on another person,
        is not separate from, and has deeply informed my teaching
        practice.
      </Paragraph>
      <Paragraph>
        Other things that are a large part of my life are the ocean,
        cycling, and peppermint tea. Originally from Seattle, WA, I
        take the vibrant qualities of adventure and nature into
        everything I do.
      </Paragraph>
      <Paragraph>Namaste.</Paragraph>
    </div>
  </Page>
);

const HeadderStyled = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  max-width: 100%;
`;
