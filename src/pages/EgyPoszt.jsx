import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

const CardKomponens = ({ poszt }) => (
    <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                       {poszt.id} - {poszt.title} 
                    </h4>
                    <p className="card-text">{poszt.body}</p>
                    <Link className="card-link" to={"/posztok"}>
                    <i className="bi bi-arrow-left"></i>Vissza</Link>
                </div>
            </div>
      </div>
);
export const EgyPoszt = () => {
const [adat, setAdat] = useState([]);
const { posztId } = useParams(); // új felírás destructuringgal
//const params = useParams(); //régi felírás
//const id = params.kommentId; // régi felírás
useEffect(() => {
    fetch(`https://harmadik.sulla.hu/Post/${posztId}`)
    .then((res) => (res.ok ? res.json() : []))
    .then((tartalom) => setAdat(tartalom));
}, [posztId]);
    return (
       <div>
            <h1>Egy poszt</h1>
            <div className="container">
                <div className="row m-5 p-5 border">
                    <CardKomponens poszt={adat}/>
                </div>
            </div>
        </div>
    )
};