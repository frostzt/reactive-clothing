import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import Authentication from './pages/authentication/Authentication.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          console.log(snapshot);
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
