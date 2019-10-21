module.exports = api => {
  api.cache(true);
  return {
    presets: ['next/babel'],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      [
        'transform-define',
        {
          'process.env.NODE_ENV': process.env.NODE_ENV,
        },
      ],
      [
        'styled-components',
        {
          ssr: true,
          displayName: true,
          preprocess: false,
        },
      ],
    ],
  };
};
