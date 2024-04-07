import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import { citiesList } from './components/const/const';
import { offers } from './moks/offers';
import { nearbyOffers } from './moks/nearbyOff';
import { reviews } from './moks/reviews';
import { store } from './components/store';
import ErrorMessage from './components/error-msg/error-msg';
import { fetchOfferAction,checkAuthAction } from './components/store/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <ErrorMessage />
      <App
        offers = {offers}
        nearbyOffers = {nearbyOffers}
        reviews = {reviews}
        citiesList={citiesList}
      />
    </Provider>
  </React.StrictMode>,
);
