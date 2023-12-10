import { nanoid } from 'nanoid';

const TableRow = ({ row, sorted, index, thead }) => {
    return (
        <tr key={nanoid()}>
            {thead ? (
                sorted && <th>Placement</th>
            ) : (
                sorted && <td>{index + 1}.</td>
            )}
            {row.map((cell) => (
                <TableCell key={nanoid()}/>
            ))}
            
        </tr>
    );
};

export default TableRow;