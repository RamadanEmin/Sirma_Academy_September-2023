import { useCallback } from 'react';
import { useSite } from '../../../contexts/dataContext';
import { prepareData } from '../../../utils/transformData';

import './FetchFromWeb.css';

const FetchFromWeb = () => {
    const { data, setData, activePage } = useSite();

    const fetchData = useCallback(() => {
        fetch(`/api/v1/stats?page=${activePage}`)
            .then((response) => response.json())
            .then((newData) => {
                const preparedData = prepareData(newData);
                const newData = preparedData.map((player) => Object.values(player));
                if (preparedData.length === 0) {
                    alert('No data to fetch');

                    return;
                }
                setData([...data, ...newData]);
            });
    }, [activePage, data, setData]);

    return <button
        onClick={fetchData}>
        <i className="fa-solid fa-earth-africa"></i>
        Fetch From Web
    </button>;
};

export default FetchFromWeb;