function excelColumnNameNumber(column){
    let columnNumber = 0;

    for (let i = 0; i < column.length; i++) {
        const char = column.charAt(i);
        const charCode = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        columnNumber = columnNumber * 26 + charCode;
    }

    console.log(columnNumber);
}

excelColumnNameNumber('AB');
excelColumnNameNumber('A');
excelColumnNameNumber('C');
excelColumnNameNumber('CZ');
excelColumnNameNumber('MM');