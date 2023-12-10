import { nanoid } from 'nanoid';
import './Table.css';
import TableRow from '../../molecules/TableRow';

function Table({ columns, data, sorted }) {
    return (
        <table className='table'>
            <thead>
                <TableRow key={nanoid()} row={columns} sorted={sorted} thead={true} />
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <TableRow key={nanoid()} row={row} sorted={sorted} index={index} thead={false} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;