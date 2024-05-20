import React, { useEffect, useState } from 'react';
import { deleteWino, listWina } from '../services/WinoService';
import { useNavigate } from 'react-router-dom';

const ListWinoComponent = () => {
  const [wina, setWina] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllWina();
  }, []);

  function getAllWina() {
    listWina()
      .then((response) => {
        setWina(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewWino() {
    navigator('/addWino');
  }

  function updateWino(id) {
    navigator(`/editWino/${id}`);
  }

  function removeWino(id) {
    console.log(id);

    deleteWino(id)
      .then((response) => {
        getAllWina();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Lista Win</h2>
      <button className='btn btn-primary mb-2' onClick={addNewWino}>
        Dodaj Wino
      </button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nazwa</th>
            <th>Rocznik</th>
            <th>Zawartość alkoholu</th>
            <th>Poziom słodyczy</th>
            <th>Cena</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {wina.map((wino) => (
            <tr key={wino.id}>
              <td>{wino.id}</td>
              <td>{wino.nazwa}</td>
              <td>{wino.rocznik}</td>
              <td>{wino.zawartoscAlkoholu}</td>
              <td>{wino.poziomSlodyczy}</td>
              <td>{wino.cena}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateWino(wino.id)}>
                  Edytuj
                </button>
                <button className='btn btn-danger' onClick={() => removeWino(wino.id)} style={{ marginLeft: '10px' }}>
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

export default ListWinoComponent;
