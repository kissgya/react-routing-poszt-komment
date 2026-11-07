import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CardKomponens = ({ kommentek }) => (
    <div className="card-container">
        {kommentek.map((komment, index) => (
            <div className="card" key={index}>
                <div className="card-body">
                    <h4 className="card-title">
                        {komment.name} - <a href={`mailto:${komment.email}`}>{komment.email}</a>
                    </h4>
                    <p className="card-text">{komment.body}</p>
                    <Link className="card-link" to={"/egykomment/" + komment.id}>
                    <i className="bi bi-eye"></i>Részletek</Link> &nbsp;&nbsp;&nbsp;
                    <Link className="card-link" to={"/komment-mod/" + komment.id}>
                    <i className="bi bi-pencil-square"></i>Módosítás</Link>
                </div>
            </div>
        ))}
    </div>
);
export const Home = () => {
    const [adatok, setAdatok] = useState([]);
    useEffect(() =>{
        fetch('https://harmadik.sulla.hu/Comment')
        .then((res) => (res.ok ? res.json() : []))
        .then((tartalom) => setAdatok(tartalom));
    }, []);
    return (
        <div>
            <h1>Kommentek</h1>
            <div className="container">
                <div className="row m-5 p-5 border">
                    <CardKomponens kommentek={adatok}/>
                </div>
            </div>
        </div>
    )
};