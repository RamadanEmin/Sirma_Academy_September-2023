import { Outlet } from 'react-router-dom';
import LoadMore from '../organisms/LoadMore/LoadMore';
import Navigation from '../organisms/Navigation/Navigation';

const TablesPage = () => {
    return (
        <div className="App">
            <Navigation />
            <Outlet />
            <LoadMore />
        </div>
    );
};

export default TablesPage;
