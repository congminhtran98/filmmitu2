import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import './styles/Responsive.css';
import { FronteggProvider } from '@frontegg/react';

const container = document.getElementById('root');

const contextOptions = {
  baseUrl: 'https://app-1ivhele6gdhi.frontegg.com',
  clientId: 'df7b3319-822f-4b17-9fc9-38a91abe056b',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
        <App />
      </FronteggProvider>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  container
);

reportWebVitals();
