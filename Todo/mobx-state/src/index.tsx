import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { TodosStore } from './stores/TodosStore';

const todosStore = new TodosStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider todosStore={todosStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
