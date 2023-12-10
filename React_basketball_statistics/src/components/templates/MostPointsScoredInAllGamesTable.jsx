import { useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';
import Table from '../organisms/Table/Table';
import { mostPointScoredPlayerSorting } from '../../utils/sorting';

function MostPointsScoredInAllGamesTable() {
    const { data } = useContext(dataContext);

    let sortedData = mostPointScoredPlayerSorting(data);

    return (
        <>
            {sortedData ? (
                <Table
                    columns={['Player name', 'Points Scored']}
                    data={sortedData}
                    sorted
                />
            ) : null}
        </>
    );
}

export default MostPointsScoredInAllGamesTable;
