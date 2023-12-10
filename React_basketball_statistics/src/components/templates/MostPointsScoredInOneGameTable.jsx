import { useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';
import Table from '../organisms/Table/Table';
import { playerPointScoreInOneGameSorting } from '../../utils/sorting';

function MostPointsScoredInOneGameTable() {
    const { data } = useContext(dataContext);
    let sortedData = playerPointScoreInOneGameSorting(data);

    return (
        <>
            {sortedData ? (
                <Table
                    columns={['Player name', 'Team', 'Time played(s)', 'Points scored']}
                    data={sortedData}
                    sorted
                />
            ) : null}
        </>
    );
}

export default MostPointsScoredInOneGameTable;