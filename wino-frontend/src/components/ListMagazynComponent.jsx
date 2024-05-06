import React, { useEffect, useState } from 'react';
import { deleteMagazyn, listMagazyny } from '../services/MagazynService';
import { useNavigate } from 'react-router-dom';

const ListMagazynComponent = () => {
    const [magazyny, setMagazyny] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllMagazyny();
    }, []);

    function getAllMagazyny() {
        listMagazyny().then((response) => {
            setMagazyny(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    function addNewMagazyn() {
        navigator('/addMagazyn');
    }

    function updateMagazyn(id) {
        navigator(`/editMagazyn/${id}`);
    }

    function removeMagazyn(id) {
        deleteMagazyn(id).then(() => {
            getAllMagazyny();
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista Magazynów</h2>
            <button className='btn btn-primary mb-2' onClick={addNewMagazyn}>Dodaj Magazyn</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID Magazynu</th>
                        <th>Lokalizacja</th>
                        <th>Temperatura</th>
                        <th>Wilgotność</th>
                        <th>Pojemność</th>
                        <th>Czynność</th>
                    </tr>
                </thead>
                <tbody>
                    {magazyny.map(magazyn =>
                        <tr key={magazyn.id}>
                            <td>{magazyn.id}</td>
                            <td>{magazyn.lokalizacja}</td>
                            <td>{magazyn.temperatura}</td>
                            <td>{magazyn.wilgotnosc}</td>
                            <td>{magazyn.pojemnosc}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateMagazyn(magazyn.id)}>Edytuj</button>
                                <button className='btn btn-danger' onClick={() => removeMagazyn(magazyn.id)} style={{ marginLeft: '10px' }}>Usuń</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListMagazynComponent;
