//  Create React Components
import React from 'react';

// Render React Components to the DOM
import ReactDOM from 'react-dom/client';

// Importing the Main App Component
import App from './App.jsx';

// For global styling
import './index.css';

// Render the App Component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);