import { useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';
import Table from '../organisms/Table/Table';
import { bestPlayerSorting } from '../../utils/sorting';

function BestPlayerInTheTeamBasedPointsScoredTable() {
    const { data } = useContext(dataContext);
    const sortedData = bestPlayerSorting(data);

return (
    <>
        {sortedData ? (
            <Table
                columns={['Team', 'Player name', 'Points scored']}
                data={sortedData}
                sorted
            />
        ) : null}
    </>
);
}

export default BestPlayerInTheTeamBasedPointsScoredTable;