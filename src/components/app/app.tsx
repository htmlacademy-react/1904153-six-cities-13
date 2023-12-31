import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import { MainPage } from '../../pages/main/main';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { Offer } from '../../pages/offer/offer';
import { NotFound } from '../../pages/404/404';
import { PrivateRouteForFavorites } from '../private-routes/private-route-for-favorites';
import { PrivateRouteForLogin } from '../private-routes/private-route-for-login';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { fetchOffers, checkAuth } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process.ts/selectors';
import { HistoryRouter } from '../history-route/history-route';
import { browserHistory } from '../../browser-history';
import { getHasError } from '../../store/offers-process/selectors';
import { ErrorScreen } from '../error-screen/error-screen';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(checkAuth());
  }, [dispatch]);

  const authStatus = useAppSelector(getAuthStatus);
  const isError = useAppSelector(getHasError);

  if (isError) {
    return (
      <ErrorScreen />);
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainPage />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRouteForFavorites authorizationStatus={authStatus}>
                <Favorites />
              </PrivateRouteForFavorites>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRouteForLogin authorizationStatus={authStatus}>
                <Login />
              </PrivateRouteForLogin>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Offer />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};
