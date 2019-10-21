import React, { createContext, useReducer } from 'react';
import App from 'next/app';

export const AppContext = createContext<any>({});
export const AppDispatchContext = createContext<any>({});

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'LOADED':
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
}

class NextApp extends App {
  render() {
    return <CustomAppFunction {...this.props} />;
  }
}

function CustomAppFunction({ Component, pageProps }: any) {
  const [state, dispatch] = useReducer(reducer, {
    quote: quotes[Math.floor(Math.random() * quotes.length)],
  });

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <Component {...pageProps} />;
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export default NextApp;

const quotes = [
  {
    speaker: 'Chögyam Trungpa',
    text: 'Don’t try to be the fastest.',
  },
  {
    speaker: 'Thích Nhất Hạnh',
    text:
      'Enlightenment, for a wave in the ocean, is the moment the wave realizes it is water.',
  },
  {
    speaker: 'Pema Chödrön',
    text:
      'Only to the extent that we expose ourselves over and over to annihilation can that which is indestructible in us be found.',
  },
];
