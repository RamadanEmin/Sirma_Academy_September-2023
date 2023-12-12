import { useSite } from '../../../contexts/dataContext';
import { prepareData } from '../../../utils/transformData';

const LoadMore = () => {
    const { data, setData, activePage, setActivePage } = useSite();

    const fetchData = () => {
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
            });
    };

    if (!data.length) {
        return null;
    }

    return <button
        style={{ marginBottom: 50 }} onClick={() => {
            fetchData();
        }}>
        <i className="fa-solid fa-rotate-right"></i>
        Load More
    </button>;
};

export default LoadMore;
