import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <>
  <div>
    <Navigation />
  </div>
  <Route path= "/" exact component = {Home}/>
  <Route path= "/" exact component = {About} />
  <Route path= "/" exact component = {Contact}/>
  </>
);

export default App;
