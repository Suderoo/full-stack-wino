import React, {useEffect, useState} from 'react'
import { deletePracownk, listPracownicy } from '../services/PracownikService'
import { useNavigate } from 'react-router-dom'

const ListPracownikComponent = () => {

    const [pracownicy, setPracownicy] = useState([])
    
    const navigator = useNavigate();

    useEffect(() => {
        getAllPracownicy();
    }, [])

    function getAllPracownicy(){
        listPracownicy().then((response) =>{
            setPracownicy(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewPracownik(){
        navigator('/addPracownik')
    }

    function updatePracownik(id) {
        navigator(`/editpracownik/${id}`)
    }

    function removePracownik(id){
        console.log(id);

        deletePracownk(id).then((response) =>{
            getAllPracownicy();
        }).catch(error =>{
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Lista Pracowników</h2>
        <button className='btn btn-primary mb-2' onClick={addNewPracownik}>Dodaj Pracownika</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                <th>ID Pracownika</th>
                <th>Imie</th>
                <th>Nazwisko</th>
                <th>Email</th>
                <th>Telefon</th>
                <th>Stanowisko</th>
                <th>Wynagrodzenie</th>
                <th>Winnica</th>
                <th>Czynność</th>
                </tr>
            </thead>
            <tbody>
                {
                    pracownicy.map(pracownik => 
                    <tr key={pracownik.id}>
                        <td>{pracownik.id}</td>
                        <td>{pracownik.imie}</td>
                        <td>{pracownik.nazwisko}</td>
                        <td>{pracownik.email}</td>
                        <td>{pracownik.numerTelefonu}</td>
                        <td>{pracownik.stanowisko}</td>
                        <td>{pracownik.wynagrodzenie}</td>
                        <td>{pracownik.winnica}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updatePracownik(pracownik.id)}>Edytuj</button>
                            <button className='btn btn-danger' onClick={() => removePracownik(pracownik.id)} 
                            style={{marginLeft: '10px'}}>Usuń</button>
                        </td>
                    </tr>)
                }
            </tbody>
            
        </table>
    </div>
  )
}

export default ListPracownikComponent