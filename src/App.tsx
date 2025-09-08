import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupConfig, isPlatform } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, {useRef, useState} from 'react';
import InitialSetup from './pages/InitialSetup';
import Signup from './pages/Signup';
import Collection from './pages/Collection';
import Settings from './pages/Settings';
import Collect from './pages/Collect';
import Login from './pages/Login';
import Account from './pages/Account';
import Map from './pages/Map';
import CollectTutorial from './pages/CollectTutorial';


setupConfig({
  rippleEffect: false,
  mode: 'ios',

})

const App: React.FC = () => {
  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="menuContent">
      <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/initialsetup">
          <InitialSetup />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/collect">
          <Collect />
        </Route>
        <Route exact path="/collection">
          <Collection />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/account">
          <Account></Account>
        </Route>
        <Route exact path="/help">
          <Welcome />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  )
};

export default App;
