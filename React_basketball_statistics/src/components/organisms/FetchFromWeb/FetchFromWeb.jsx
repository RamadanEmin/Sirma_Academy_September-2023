import { useCallback } from 'react';
import { useSite } from '../../../contexts/dataContext';

import './FetchFromWeb.css';

const FetchFromWeb = () => {
    const { data, setData, activePage } = useSite();

    const fetchData = useCallback(() => {
        fetch(`/api/v1/stats?page=${activePage}`)
            .then((response) => response.json())
            .then((newData) => {
                console.log(newData);
            });
    }, [activePage, data, setData]);

    return <button
        onClick={fetchData}>
        <i className="fa-solid fa-earth-africa"></i>
        Fetch From Web
    </button>;
};

export default FetchFromWeb;