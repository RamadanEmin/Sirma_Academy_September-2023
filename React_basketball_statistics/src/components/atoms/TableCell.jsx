const TableCell = ({ cell, thead }) => {
    return thead
        ? <th> {cell}</th >
        : <td>{cell}</td>;
};

export default TableCell;