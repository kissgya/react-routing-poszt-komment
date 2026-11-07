import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export const UjPoszt = () => {
    const navigate = useNavigate();
    const [adat, setAdat] = useState({
        userId: '',
        title: '',
        body: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://harmadik.sulla.hu/Post', adat);
            navigate('/posztok');
        } catch (error) {
            console.error("Hiba az új poszt mentése közben: ", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAdat((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Új poszt</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row pb-3">
                    <label htmlFor="userId" className="form-label">UserId</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="userId" 
                        name="userId" 
                        value={adat.userId} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="form-group row pb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        name="title" 
                        value={adat.title} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="form-group row pb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="body" 
                        name="body" 
                        value={adat.body} 
                        onChange={handleInputChange} 
                    />
                </div>
                <button type="submit" className="btn btn-success">Mentés</button>    
                <span className="btn btn-warning">
                    <Link to="/posztok" style={{ color: 'red', textDecoration: 'none' }}>Vissza</Link>
                </span>
            </form>
        </div>
    );
};

export default UjPoszt;