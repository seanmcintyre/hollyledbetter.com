import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Page, Testimonial, Class } from '../components';

export const Schedule = () => {
  const [classes, setClasses] = useState();

  useEffect(() => {
    getClasses.then(json => setClasses(sloppyParse(json)));
  }, []);

  // useEffect(() => {
  //   setTimeout(
  //     () => getClasses.then(json => setClasses(sloppyParse(json))),
  //     1000,
  //   );
  // });

  return (
    <Page title="Schedule">
      <Testimonial source="Laura">
        Our community has gravitated to Holly’s sessions not only
        because she knows her craft really well, but more so the time
        she takes to listen to people’s pain. Anyone can call
        themselves a yoga instructor, but Holly's talent is natural.
        She is truly a gift.
      </Testimonial>

      <img src="/static/5.jpg" />

      {classes &&
        classes.map((c: any, i: number) => (
          <Class
            key={i}
            day={c.day}
            description={c.description}
            end={c.end}
            href={c.link}
            level={c.level}
            location={c.location}
            name={c.name}
            start={c.start}
          />
        ))}
    </Page>
  );
};

function sloppyParse(entries: any[]) {
  return entries.map(entry => {
    const data = entry.content.$t
      .split(/(?:[a-z]{3,}: )/g)
      .map((str: string) =>
        str.slice(-2) === ', ' ? str.slice(0, -2) : str,
      );

    return {
      day: data[1],
      location: data[2],
      name: data[3],
      start: data[4],
      end: data[5],
      description: data[6],
      level: data[7],
      link: (data[9] && 'https://' + data[9]) || null,
    };
  });
}

const db =
  'https://spreadsheets.google.com/feeds/list/1Gk3csWwFL6jYr-MzY0kw6LR8DCju_7ShoeiBBQzB7Yc/od6/public/basic?alt=json';

const getClasses = fetch(db).then(data =>
  data.json().then(json => json.feed.entry),
);
