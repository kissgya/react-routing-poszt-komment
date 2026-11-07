import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const UjPoszt = () => {
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [hiba, setHiba] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ujPosztData = {
        userId: Number(userId),
        title: title,
        body: body
      };

      // Axios POST kérés async/await-tel
      await axios.post('https://harmadik.sulla.hu/Post', ujPosztData);

      // Mentés után visszanavigálunk a posztok oldalra
      navigate('/posztok');
    } catch (error) {
      setHiba('Hiba történt a poszt mentése során: ' + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Új Poszt Létrehozása</h2>
      {hiba && <div className="alert alert-danger">{hiba}</div>}

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Szerző ID (userId):</label>
          <input
            type="number"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Cím (title):</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tartalom (body):</label>
          <textarea
            className="form-control"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          Poszt Mentése
        </button>
      </form>
    </div>
  );
};

export default UjPoszt;