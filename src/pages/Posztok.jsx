import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <i className="bi bi-eye"></i>Részletek</Link>
                </div>
            </div>
        ))}
    </div>
);
export const Posztok = () => {
    const [adatok, setAdatok] = useState([]);
    useEffect(() =>{
        fetch('https://harmadik.sulla.hu/Post')
        .then((res) => (res.ok ? res.json() : []))
        .then((tartalom) => setAdatok(tartalom));
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
    )
};