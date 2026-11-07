import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ModPoszt = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [poszt, setPoszt] = useState({
    userId: 1,
    title: '',
    body: ''
  });
  const [hiba, setHiba] = useState('');

  // Poszt betöltése ID alapján
  useEffect(() => {
    const posztBetoltes = async () => {
      try {
        const response = await axios.get(`https://harmadik.sulla.hu/Post/${id}`);
        setPoszt(response.data);
      } catch (error) {
        setHiba('Nem sikerült betölteni a posztot: ' + error.message);
      }
    };

    posztBetoltes();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPoszt((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://harmadik.sulla.hu/Post/${id}`, poszt);
      navigate('/posztok');
    } catch (error) {
      setHiba('Hiba történt a módosítás során: ' + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Poszt Módosítása (ID: {id})</h2>
      {hiba && <div className="alert alert-danger">{hiba}</div>}

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Szerző ID (userId):</label>
          <input
            type="number"
            name="userId"
            className="form-control"
            value={poszt.userId || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Cím (title):</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={poszt.title || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tartalom (body):</label>
          <textarea
            name="body"
            className="form-control"
            rows="4"
            value={poszt.body || ''}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Mentés
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/posztok')}
          >
            Mégse
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModPoszt;