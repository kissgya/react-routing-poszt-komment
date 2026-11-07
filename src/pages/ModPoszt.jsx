import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export const ModPoszt = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.posztId;

    const [adat, setAdat] = useState({
        userId: '',
        title: '',
        body: ''
    });

    useEffect(() => {
        (async () => {
            try {
                const tartalom = await axios.get(`https://harmadik.sulla.hu/Post/${id}`);
                setAdat(tartalom.data);
            } catch (error) {
                console.error("Hiba a poszt betöltése közben:", error);
            }
        })();
    }, [id]);

    const handleSubmit = async (event) => {
        event.persist();
        event.preventDefault();
        try {
            await axios.put(`https://harmadik.sulla.hu/Post/${id}`, adat);
            navigate('/posztok');
        } catch (error) {
            console.error("Hiba az adatok mentése közben: ", error);
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
            <h2>Poszt módosítása</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row pb-3">
                    <label htmlFor="userId" className="form-label">UserId</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="userId" 
                        name="userId" 
                        defaultValue={adat.userId} 
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
                        defaultValue={adat.title} 
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
                        defaultValue={adat.body} 
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

export default ModPoszt;