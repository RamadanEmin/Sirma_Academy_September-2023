import { useContext } from 'react';
import { transformStringToArray, transformArrayToMatrix } from '../../../utils/transformData';
import { dataContext } from '../../../contexts/dataContext';
import { checkForValidData, validFileFormats } from '../../../utils/validation';

import './UploadFile.css';

function UploadFile({ className }) {
    const { setData } = useContext(dataContext);

    function handleFileUpload(e) {

        try {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                const arr = transformStringToArray(reader.result);
                const matrix = transformArrayToMatrix(arr);
                const fileFormat = file.name.split('.').pop();
                if (!validFileFormats.includes(fileFormat)) {
                    alert("Invalid file format. Please upload .txt or .csv file");
                    return
                }

                if (fileFormat === "json") {
                    const parsedData = JSON.parse(reader.result);

                    const newData = parsedData.map((player) => Object.values(player))
                    setData(newData);
                    return
                }

                checkForValidData(matrix);
                setData(matrix);
            };
            reader.onerror = () => {
                reader.abort()
            };
        } catch (error) {
            if (!e.target.files[0]) {
                alert("No file selected");
                return
            }
        }
    }

    return (
        <label className={`file-loader ${className}`}>
            <i className="fa-solid fa-download"></i> Upload file
            <input type="file" onChange={handleFileUpload} />
        </label>
    );
}

export default UploadFile;
