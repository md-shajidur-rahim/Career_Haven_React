//  To create React components
import React from 'react';
// To render React components to the DOM
import ReactDOM from 'react-dom/client';
// Importing the Main App Component
import App from './App.jsx';
import './index.css';

// Render the App Component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);