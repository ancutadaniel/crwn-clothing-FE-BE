import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/header/header.component';
import SimpleSpinner from './components/simple-spinner/simple-spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

//redux sagas actions
import { selectCurrentUser } from './redux/user-reducer/user.selector';
import { checkUserSession } from './redux/user-reducer/user-actions';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Shop = lazy(() => import('./pages/shop/shop.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));
const SignInSignUpPage = lazy(() =>
  import('./pages/sign-in-sign-up/sign-in-sign-up.component')
);

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
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<SimpleSpinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;
