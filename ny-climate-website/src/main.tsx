// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage';
import './index.css'; // Make sure this CSS file is imported as well

const rootElement = document.getElementById('app') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);