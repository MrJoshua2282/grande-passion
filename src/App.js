import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Spinner from './shared/Spinner/Spinner';
const CustomizeFood = React.lazy(() => import('./components/CustomizeFood/CustomizeFoods'));
const CustomizeDrink = React.lazy(() => import('./components/CustomizeDrink/CustomizeDrink'));
const Welcome = React.lazy(() => import('./components/Welcome/Welcome'));
const Default = React.lazy(() => import('./components/Default/Default'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />} >
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/customize/food' exact component={CustomizeFood} />
          <Route path='/customize/drink' exact component={CustomizeDrink} />
          <Route component={Default} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
