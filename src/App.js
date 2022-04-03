import './styles/bootstrap.scss';
import './styles/global.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

import MainLayout from './components/layout/MainLayout/MainLayoutContainer';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPageContainer';
import Blog from './components/views/Blog/Blog';
import Register from './components/features/Register/Register';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/home'} component={Homepage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/blog'} component={Blog} />
          <Route exact path={'/register'} component={Register} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
