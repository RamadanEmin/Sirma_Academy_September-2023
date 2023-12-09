import { Outlet } from 'react-router-dom';
import Navigation from '../organisms/Navigation/Navigation';

const TablesPage = () => {
    return (
        <div className="App">
            <Navigation />
            <Outlet />
        </div>
    );
};

export default TablesPage;