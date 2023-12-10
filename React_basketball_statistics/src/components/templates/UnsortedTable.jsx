import { useContext } from 'react';
import { dataContext } from '../../contexts/dataContext';
import Table from '../organisms/Table/Table';

function UnsortedTable() {
    const { data } = useContext(dataContext);

    return (
        <>
            {(data.length > 0) ? (
                <Table
                    columns={['Player name', 'Team', 'Time played(s)', 'Points scored']}
                    data={data}
                />
            ) : null}
        </>
    );
}

export default UnsortedTable;
