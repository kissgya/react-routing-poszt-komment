import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

const CardKomponens = ({ komment }) => (
    <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {komment.name} - <a href={`mailto:${komment.email}`}>{komment.email}</a>
                    </h4>
                    <p className="card-text">{komment.body}</p>
                    <Link className="card-link" to={"/"}>
                    <i className="bi bi-arrow-left"></i>Vissza</Link>
                </div>
            </div>
      </div>
);
export const EgyKomment = () => {
const [adat, setAdat] = useState([]);
const { kommentId } = useParams(); // új felírás destructuringgal
//const params = useParams(); //régi felírás
//const id = params.kommentId; // régi felírás
useEffect(() => {
    fetch(`https://harmadik.sulla.hu/Comment/${kommentId}`)
    .then((res) => (res.ok ? res.json() : []))
    .then((tartalom) => setAdat(tartalom));
}, [kommentId]);
    return (
       <div>
            <h1>Egy komment</h1>
            <div className="container">
                <div className="row m-5 p-5 border">
                    <CardKomponens komment={adat}/>
                </div>
            </div>
        </div>
    )
};