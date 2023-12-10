import { useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';
import Table from '../organisms/Table/Table';

function MostPointsScoredInOneGameTable() {
    const { data } = useContext(dataContext);

    return (
        <>
            {sortedData ? (
                <Table
                    columns={['Player name', 'Team', 'Time played(s)', 'Points scored']}
                    data={data}
                    sorted
                />
            ) : null}
        </>
    );
}

export default MostPointsScoredInOneGameTable;
