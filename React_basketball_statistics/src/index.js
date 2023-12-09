import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ContextProvider from './contexts/dataContext';
import UnsortedTable from './components/templates/UnsortedTable';
import MostPointsScoredInOneGameTable from './components/templates/MostPointsScoredInOneGameTable';
import MostPointsScoredInAllGamesTable from './components/templates/MostPointsScoredInAllGamesTable';
import ScoredPointsBasedOnPlayingTimeTable from './components/templates/ScoredPointsBasedOnPlayingTimeTable';
import MostPointsScoredByTeamTable from './components/templates/MostPointsScoredByTeamTable';
import BestPlayerInTheTeamBasedPointsScoredTable from './components/templates/BestPlayerInTheTeamBasedPointsScoredTable';

import './index.css';
import App from './App';
import HomePage from './components/pages/HomePage';
import TablesPage from './components/pages/TablesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />, 
    },
    {
        path: '/table',
        element: <TablesPage />,
        children: [
            {
                path: 'unsorted',
                element: <UnsortedTable />,
            },
            {
                path: 'points-in-one-game',
                element: <MostPointsScoredInOneGameTable />,
            },
            {
                path: 'points-in-all-game',
                element: <MostPointsScoredInAllGamesTable />,
            },
            {
                path: 'points-in-time',
                element: <ScoredPointsBasedOnPlayingTimeTable />,
            },
            {
                path: 'points-per-team',
                element: <MostPointsScoredByTeamTable />,
            },
            {
                path: 'best-player-in-the-team',
                element: <BestPlayerInTheTeamBasedPointsScoredTable />,
            },
        ]
    }
]);

root.render(
    <ContextProvider>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </ContextProvider>
);