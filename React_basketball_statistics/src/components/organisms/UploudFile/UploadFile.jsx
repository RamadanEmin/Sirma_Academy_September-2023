import './UploadFile.css';

function UploadFile({ className }) {

    function handleFileUpload(e) {
        e.preventDefault();

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {     
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