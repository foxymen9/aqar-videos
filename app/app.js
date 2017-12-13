import React, { Component } from 'react';
import {
  Linking,
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './common/middlewares/promiseMiddleware';
import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux';
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, promiseMiddleware)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import MainPage from './views/pages/MainPage';
import RegisterPage from './views/pages/RegisterPage';
import MyAdsPage from './views/pages/MyAdsPage';
import MyWishListPage from './views/pages/MyWishListPage';
import PackagePage from './views/pages/PackagePage';
import PackageDetailPage from './views/pages/PackageDetailPage';
import ProfileEditPage from './views/pages/ProfileEditPage';
import AreaPage from './views/pages/AreaPage';
import MyLocationPage from './views/pages/MyLocationPage';
import SupportAdvertisementPage from './views/pages/SupportAdvertisementPage';
import ProductListPage from './views/pages/ProductListPage';
import ProductDetailPage from './views/pages/ProductDetailPage';
import PostNewVideoPage from './views/pages/PostNewVideoPage';
import MyMessagePage from './views/pages/MyMessagePage';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scenes = Actions.create(
      <Scene key="root">
        <Scene key="Main" initial={ true } component={ MainPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Register" component={ RegisterPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="MyAds" component={ MyAdsPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="MyWishList" component={ MyWishListPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Package" component={ PackagePage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="PackageDetail" component={ PackageDetailPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="ProfileEdit" component={ ProfileEditPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Area" component={ AreaPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="MyLocation" component={ MyLocationPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="SupportAdvertisement" component={ SupportAdvertisementPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="ProductList" component={ ProductListPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="ProductDetail" component={ ProductDetailPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="PostNewVideo" initial={ true } component={ PostNewVideoPage } hideNavBar={ true } panHandlers={null}/>
        <Scene key="MyMessage" component={ MyMessagePage } hideNavBar={ true } panHandlers={null}/>
      </Scene>
    );

    return (
      <Provider store={ store }>
        <Router hideNavBar={ true } scenes={ scenes }/>
      </Provider>
    );
  }
}