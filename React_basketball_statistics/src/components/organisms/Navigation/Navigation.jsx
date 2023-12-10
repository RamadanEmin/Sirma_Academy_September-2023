import { NavLink } from 'react-router-dom';

import './Navigation.css';
import UploadFile from '../UploudFile/UploadFile';

function Navigation() {

    return (
        <nav className='navigation'>
            <ul>
                <li><NavLink to={'/table/unsorted'}>Unsorted</NavLink></li>
                <li><NavLink to={'/table/points-in-one-game'}>Player points in game</NavLink></li>
                <li><NavLink to={'/table/points-in-all-game'}>Player points in all games</NavLink></li>
                <li><NavLink to={'/table/points-in-time'}>Player points in time per sec</NavLink></li>
                <li><NavLink to={'/table/points-per-team'}>Team points</NavLink></li>
                <li><NavLink to={'/table/best-player-in-the-team'}>Best player in team</NavLink></li>
                <li><UploadFile/></li>
            </ul>
        </nav>
    );
}

export default Navigation;