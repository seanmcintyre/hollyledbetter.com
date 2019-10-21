import React from 'react';
import { Page, Testimonial, Paragraph } from '../components';
import { useRouter } from 'next/router';
import { Contact } from './icons';

export const Private = () => {
  const router = useRouter();

  return (
    <Page title="Private Lessons">
      <Testimonial source="Ginny">
        Holly's calm, soothing voice immediately guides me into a
        relaxed mode. By the end of the session, I feel a weight has
        been lifted off of me.
      </Testimonial>

      <img src="/static/8.jpg" />

      <div
        style={{
          width: '12rem',
          fontWeight: 700,
          margin: '2rem auto 0',
          border: '2px solid rgba(0,0,0,0.2)',
          textAlign: 'center',
          padding: '1rem 2rem',
          borderRadius: '0.3rem',
          cursor: 'pointer',
        }}
        onClick={() => router.push('/contact')}
      >
        <Contact
          style={{
            maxWidth: '50%',
            display: 'block',
            margin: '0 auto',
          }}
        />
        <span>get in touch &raquo;</span>
      </div>

      <Paragraph>
        A private practice can begin or continue your connection to
        your mind and body. It is a radical gift for your full self.
        You can treat this as an opportunity to work with an injury,
        deepen your practice, or simply give yourself the necessary
        space for self-care.
      </Paragraph>

      <Paragraph>
        Please get in touch to inquire about scheduling and payment
        options.
      </Paragraph>
    </Page>
  );
};
