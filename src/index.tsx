import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='text-center'>
      <h1 className='text-center m-2 p-2'>Welcome Johnny's First React Site!</h1>
      <h3 >This sight uses React to dynamically populate the information for each Basketall team in March Madness</h3>
    </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
