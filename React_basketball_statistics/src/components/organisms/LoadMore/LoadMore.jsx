import { useState } from 'react';
import { useSite } from '../../../contexts/dataContext';
import { prepareData } from '../../../utils/transformData';
import spinner from '../../../assets/spinner.json';
import Lottie from 'lottie-react';

const LoadMore = () => {
    const { data, setData, activePage, setActivePage } = useSite();
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        setActivePage(activePage + 1);
        fetch(`/api/v1/stats?page=${activePage + 1}`)
            .then((response) => response.json())
            .then((d) => {
                const preparedData = prepareData(d);
                const newData = preparedData.map((player) => Object.values(player));

                if (preparedData.length === 0) {
                    alert('No data to fetch');
                    return;
                }

                setData([...data, ...newData]);
                setLoading(false);
            });
    };

    if (!data.length) {
        return null;
    }

    return <button
        style={{ marginBottom: 50 }} onClick={() => {
            if (!loading) {
                fetchData();
            }
        }}>

        {loading ?
            <>
                <Lottie animationData={spinner} loop={true} style={{ width: 30, height: 30 }} autoplay={true} />
                Loading...
            </>

            :
            <>
                <i className="fa-solid fa-rotate-right"></i>
                Load More
            </>
        }
    </button>;
};

export default LoadMore;
