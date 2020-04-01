import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ContainerComponent from './components/ContainerComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ContainerComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
