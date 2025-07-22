import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App/App/App';

// import Alohadashboard from './components/AlohaDashboard/AlohaDashboard';

// import TodoList from './components/TodoList/TodoList';

// import Scene from './components/Scene/Scene';

// import Counter from './components/Counter/Counter';

import CounterPage from './components/Counter/CounterPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterPage/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

