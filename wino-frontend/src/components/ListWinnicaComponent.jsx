import React, { useEffect, useState } from 'react';
import { deleteWinnica, listWinnice } from '../services/WinnicaService';
import { useNavigate } from 'react-router-dom';

const ListWinnicaComponent = () => {
  const [winnice, setWinnice] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWinnice();
  }, []);

  const fetchWinnice = async () => {
    try {
      const response = await listWinnice();
      setWinnice(response.data);
    } catch (error) {
      console.error('Błąd podczas pobierania listy winnic:', error);
    }
  };

  const addNewWinnica = () => {
    navigate('/addWinnica');
  };

  const updateWinnica = (id) => {
    navigate(`/editWinnica/${id}`);
  };

  const removeWinnica = async (id) => {
    try {
      await deleteWinnica(id);
      fetchWinnice();
    } catch (error) {
      console.error('Błąd podczas usuwania winnicy:', error);
    }
  };

  return (
    <div className='container'>
      <h2 className='text-center'>Lista Winnic</h2>
      <button className='btn btn-primary mb-2' onClick={addNewWinnica}>
        Dodaj Winnicę
      </button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID Winnicy</th>
            <th>Nazwa</th>
            <th>Adres</th>
            <th>Rok Założenia</th>
            <th>Akcja</th>
          </tr>
        </thead>
        <tbody>
          {winnice.map((winnica) => (
            <tr key={winnica.id}>
              <td>{winnica.id}</td>
              <td>{winnica.nazwa}</td>
              <td>{winnica.adres}</td>
              <td>{winnica.rokZalozenia}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateWinnica(winnica.id)}>
                  Edytuj
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => removeWinnica(winnica.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Usuń
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListWinnicaComponent;