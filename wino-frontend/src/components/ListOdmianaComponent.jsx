import React, { useEffect, useState } from 'react';
import { deleteOdmiana, listOdmiany } from '../services/OdmianaService';
import { useNavigate } from 'react-router-dom';

const ListOdmianaComponent = () => {
  const [odmiany, setOdmiany] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOdmiany();
  }, []);

  const fetchOdmiany = async () => {
    try {
      const response = await listOdmiany();
      setOdmiany(response.data);
    } catch (error) {
      console.error('Błąd podczas pobierania listy odmian:', error);
    }
  };

  const addNewOdmiana = () => {
    navigate('/addOdmiana');
  };

  const updateOdmiana = (id) => {
    navigate(`/editOdmiana/${id}`);
  };

  const removeOdmiana = async (id) => {
    try {
      await deleteOdmiana(id);
      fetchOdmiany();
    } catch (error) {
      console.error('Błąd podczas usuwania odmiany:', error);
    }
  };

  return (
    <div className='container'>
      <h2 className='text-center'>Lista Odmian</h2>
      <button className='btn btn-primary mb-2' onClick={addNewOdmiana}>
        Dodaj Odmianę
      </button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID Odmiany</th>
            <th>Nazwa</th>
            <th>Opis</th>
            <th>Kraj Pochodzenia</th>
            <th>Zawartość Cukru</th>
            <th>Kwasowość</th>
            <th>Akcja</th>
          </tr>
        </thead>
        <tbody>
          {odmiany.map((odmiana) => (
            <tr key={odmiana.id}>
              <td>{odmiana.id}</td>
              <td>{odmiana.nazwa}</td>
              <td>{odmiana.opis}</td>
              <td>{odmiana.krajPochodzenia}</td>
              <td>{odmiana.zawartoscCukru}</td>
              <td>{odmiana.kwasowosc}</td>
              <td>
                <button className='btn btn-info' onClick={()=> updateOdmiana(odmiana.id)}>Edytuj</button>
                <button
                className='btn btn-danger'
                onClick={() => removeOdmiana(odmiana.id)}
                style={{ marginLeft: '10px' }}>
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

export default ListOdmianaComponent;