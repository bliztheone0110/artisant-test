import React, { StrictMode } from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { CommonStyles } from './styles/global';
import { createRoot } from 'react-dom/client';
import { setupStore } from './store/index';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
const store = setupStore();

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CommonStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);

reportWebVitals();
