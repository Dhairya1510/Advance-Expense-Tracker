import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'

import {Provider} from './context/context'
import './index.css';

import App from './App';

ReactDOM.render(
  <SpeechProvider appId="349c7acf-cdfa-48fa-ab9c-d5457577d34b" language="en-US">
<Provider>
<App />
</Provider>
</SpeechProvider>,
 document.getElementById('root'));
