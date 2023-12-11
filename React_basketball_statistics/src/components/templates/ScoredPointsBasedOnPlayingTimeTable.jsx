import { useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';
import Table from '../organisms/Table/Table';
import { bestPlayerScoreSrotingByTime } from '../../utils/sorting';

function ScoredPointsBasedOnPlayingTimeTable() {
    const { data } = useContext(dataContext);
    let sortedData = bestPlayerScoreSrotingByTime(data);

    return (
        <>
            {sortedData ? (
                <Table
                    columns={['Player name', 'Team', 'Time played(s)', 'Points scored', 'Scored points per second']}
                    data={sortedData}
                    sorted
                />
            ) : null}
        </>
    );
}

export default ScoredPointsBasedOnPlayingTimeTable;
