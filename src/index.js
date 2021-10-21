import React from 'react';
import ReactDOM from 'react-dom';
/*simport './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

function formatName(user) {
  return user.firstName + ' ' + user.lastName + ' tú tienes ' + user.age;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  age: 26,
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
