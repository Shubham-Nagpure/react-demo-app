import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ProfileComponent from './components/ProfileComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ProfileComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
