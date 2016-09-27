import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';

import Wizard from './components/WizardWrapper';


export default <Route component={ Layout }>
    <Route path='/' components={{ body: Wizard }} />
 
</Route>;
