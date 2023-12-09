import { useContext } from 'react';
import { transformStringToArray, transformArrayToMatrix } from '../../../utils/transformData';
import { dataContext } from '../../../contexts/dataContext';

import './UploadFile.css';

function UploadFile({ className }) {
    const { setData } = useContext(dataContext);

    function handleFileUpload(e) {
        e.preventDefault();

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const arr = transformStringToArray(reader.result);
            console.log(arr);
            const matrix = transformArrayToMatrix(arr);
            console.log(matrix);

            setData(matrix);
        };
    }

    return (
        <label className={`file-loader ${className}`}>
            <i className="fa-solid fa-download"></i> Upload file
            <input type="file" onChange={handleFileUpload} />
        </label>
    );
}

export default UploadFile;