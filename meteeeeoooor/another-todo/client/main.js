import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './main.html';
import '../imports/ui/containers/App/styles.css'
import App from '../imports/ui/containers/App/index';
import registerServiceWorker from './registerServiceWorker';
import { Meteor } from 'meteor/meteor';


Meteor.startup( () => {
  ReactDOM.render(<App />, document.getElementById('root')),
  registerServiceWorker()
}
);

