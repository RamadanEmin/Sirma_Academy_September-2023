import { useContext, useEffect } from 'react';
import { dataContext } from '../../contexts/dataContext';
import { useNavigate } from 'react-router-dom';
import FetchFromWeb from '../organisms/FetchFromWeb/FetchFromWeb';
import UploadFile from '../organisms/UploudFile/UploadFile';

const HomePage = () => {
    const { data } = useContext(dataContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (data.length > 0) {
            navigate('/table/unsorted');
        }
    }, [data, navigate]);

    return (
        <div className="App">
            <UploadFile className='upload' />
            <FetchFromWeb />
            {data.length === 0 ? (
                <p className='select-file'>Please select file.</p>
            ) : null
            }
        </div>
    );
};

export default HomePage;
