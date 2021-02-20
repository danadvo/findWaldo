import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import config from './config';

const ipDataKey = config.IPDATA_API;
var mapKey = config.GOOGLE_MAP_API;
ReactDOM.render(
  <App ipDataKey={ipDataKey} mapKey={mapKey}/>,
  document.getElementById('root')
);
