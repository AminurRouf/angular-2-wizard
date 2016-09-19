import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';


export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
 
</Route>;
