import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const CardKomponens = ({ posztok }) => (
    <div className="card-container">
        {posztok.map((poszt, index) => (
            <div className="card" key={index}>
                <div className="card-body">
                    <h4 className="card-title">
                        {poszt.id} - {poszt.title}
                    </h4>
                    <p className="card-text">{poszt.body}</p>
                    <Link className="card-link" to={"/egyposzt/" + poszt.id}>
                        <i className="bi bi-eye"></i> Részletek
                    </Link>
                       
                    <Link className="card-link text-warning" to={"/poszt-mod/" + poszt.id}>
                        <i className="bi bi-pencil-square"></i> Módosítás
                    </Link>
                </div>
            </div>
        ))}
    </div>
);

export const Posztok = () => {
    const [adatok, setAdatok] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const tartalom = await axios.get('https://harmadik.sulla.hu/Post');
                setAdatok(tartalom.data);
            } catch (error) {
                console.error("Hiba a posztok betöltése közben:", error);
            }
        })();
    }, []);

    return (
        <div>
            <h1>Posztok</h1>
            <div className="container">
                <div className="row m-5 p-5 border">
                    <CardKomponens posztok={adatok}/>
                </div>
            </div>
        </div>
    );
};

export default Posztok;