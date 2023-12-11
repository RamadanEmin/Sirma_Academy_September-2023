import { useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';
import Table from '../organisms/Table/Table';
import { teamSorting } from '../../utils/sorting';

function MostPointsScoredByTeamTable() {
    const { data } = useContext(dataContext);
    const sortedData = teamSorting(data);

    return (
        <>
            {sortedData ? (
                <Table
                    columns={['Team', 'Points Scored']}
                    data={sortedData}
                    sorted
                />
            ) : null}
        </>
    );
}

export default MostPointsScoredByTeamTable;