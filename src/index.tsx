import * as React from 'react';
import { render } from 'react-dom';

import { Hello } from './components/Hello';

import './index.css';

render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root'),
);
