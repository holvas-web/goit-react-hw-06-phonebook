// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { GlobalStyle } from 'components/GlobalStyle';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
        <GlobalStyle />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);