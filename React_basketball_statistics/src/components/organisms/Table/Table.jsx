import { nanoid } from 'nanoid';
import './Table.css';
import TableRow from '../../molecules/TableRow';

function Table({ data }) {
    return (
        <table className='table'>
            <thead>
                <TableRow />
            </thead>
            <tbody>
                {data.map((row) => (
                    <TableRow key={nanoid()} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;