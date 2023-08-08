export const AppRoute = {
  Root: '/',
  Favorites: '/favorites',
  Login: '/login',
  Offer: '/offer',
  NotFound: '/404',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 140;

export const CITY = {
  name: 'Amsterdam',
  location: {
    latitude: 52.38,
    longitude: 4.9,
    zoom: 12
  }
} as const;

export const CitiesNames = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const URL_MARKER_DEFAULT =
  '../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../img/pin-active.svg';

export const CitiesMap = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
];
