import { useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';
import Table from '../organisms/Table/Table';

function MostPointsScoredInOneGameTable() {
    const { data } = useContext(dataContext);

    return (
        <>
            {sortedData ? (
                <Table
                    data={data}
                />
            ) : null}
        </>
    );
}

export default MostPointsScoredInOneGameTable;
