import { NavLink } from 'react-router-dom';
import FetchFromWeb from '../FetchFromWeb/FetchFromWeb';
import UploadFile from '../UploudFile/UploadFile';

import './Navigation.css';

const routes =  [
    {
        title: 'Unsorted',
        path: '/table/unsorted'
    },
    {
        title: 'Player points in game',
        path: '/table/points-in-one-game'
    },
    {
        title: 'Player points in all games',
        path: '/table/points-in-all-game'
    },
    {
        title: 'Player points in time per sec',
        path: '/table/points-in-time'
    },
    {
        title: 'Team points',
        path: '/table/points-per-team'
    },
    {
        title: 'Best player in team',
        path: '/table/best-player-in-the-team'
    }
];

function Navigation() {

    return (
        <nav className='navigation'>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <NavLink to={route.path} active='active' exact={'true'}>
                            {route.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
                <div>
                <UploadFile/>
                <FetchFromWeb />
                </div>
        </nav>
    );
}

export default Navigation;
