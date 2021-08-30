import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

//redux sagas actions
import { selectCurrentUser } from './redux/user-reducer/user.selector';
import { checkUserSession } from './redux/user-reducer/user-actions';

import './App.css';

const App = () => {
  // first approach without selector
  // const user = useSelector((state) => state.root_user_reducer.currentUser);
  // second approach with selector
  const userSelector = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route
          exact
          path='/signin'
          render={() =>
            userSelector ? <Redirect to='/' /> : <SignInSignUpPage />
          }
        />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </div>
  );
};

export default App;
