import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TodoForm from './todo-form';

ReactDOM.render(
  <React.StrictMode>
    <TodoForm />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
