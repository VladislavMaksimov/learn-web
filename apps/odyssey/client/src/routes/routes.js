import { HomePage } from '../pages/HomePage/HomePage';
import { TrackPage } from '../pages/TrackPage/TrackPage';

export const APP_ROUTES = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/track/:trackId',
    element: <TrackPage />,
  },
];
