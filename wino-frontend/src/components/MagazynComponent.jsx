import React, { useEffect, useState } from 'react';
import { createMagazyn, getMagazyn, updateMagazyn } from '../services/MagazynService';
import { useNavigate, useParams } from 'react-router-dom';

const MagazynComponent = () => {

    // Stan dla pól formularza
    const [lokalizacja, setLokalizacja] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [wilgotnosc, setWilgotnosc] = useState('');
    const [pojemnosc, setPojemnosc] = useState('');

    const { id } = useParams();
    const [errors, setErrors] = useState({
        lokalizacja: '',
        temperatura: '',
        wilgotnosc: '',
        pojemnosc: ''
    });

    const navigator = useNavigate();

    // Efekt pobierający dane magazynu do edycji
    useEffect(() => {
        if (id) {
            getMagazyn(id).then((response) => {
                setLokalizacja(response.data.lokalizacja);
                setTemperatura(response.data.temperatura);
                setWilgotnosc(response.data.wilgotnosc);
                setPojemnosc(response.data.pojemnosc);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [id]);

    // Funkcja obsługująca zapis lub aktualizację magazynu
    function saveOrUpdateMagazyn(e) {
        e.preventDefault();

        // Walidacja formularza
        if (validateForm()) {
            const magazyn = { lokalizacja, temperatura, wilgotnosc, pojemnosc };

            if (id) {
                // Aktualizacja magazynu
                updateMagazyn(id, magazyn).then((response) => {
                    console.log(response.data);
                    navigator('/magazyny');
                }).catch(error => {
                    console.error(error);
                });
            } else {
                // Tworzenie nowego magazynu
                createMagazyn(magazyn).then((response) => {
                    console.log(response.data);
                    navigator('/magazyny');
                }).catch(error => {
                    console.error(error);
                });
            }
        }
    }

    // Funkcja walidująca formularz
    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        // Walidacja lokalizacji
        if (lokalizacja.trim()) {
            errorsCopy.lokalizacja = '';
        } else {
            errorsCopy.lokalizacja = 'Lokalizacja jest wymagana';
            valid = false;
        }

        // Walidacja temperatury
        if (!isNaN(temperatura)) {
            errorsCopy.temperatura = '';
        } else {
            errorsCopy.temperatura = 'Temperatura musi być liczbą';
            valid = false;
        }

        // Walidacja wilgotności
        if (!isNaN(wilgotnosc)) {
            errorsCopy.wilgotnosc = '';
        } else {
            errorsCopy.wilgotnosc = 'Wilgotność musi być liczbą';
            valid = false;
        }

        // Walidacja pojemności
        if (!isNaN(pojemnosc)) {
            errorsCopy.pojemnosc = '';
        } else {
            errorsCopy.pojemnosc = 'Pojemność musi być liczbą';
            valid = false;
        }

        // Ustawienie błędów
        setErrors(errorsCopy);

        return valid;
    }

    // Zwracany widok
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <h3 className='card-header'>{id ? 'Edytuj magazyn' : 'Dodaj magazyn'}</h3>
                        <div className='card-body'>
                            <form onSubmit={saveOrUpdateMagazyn}>
                                <div className='mb-3'>
                                    <label htmlFor='lokalizacja' className='form-label'>Lokalizacja</label>
                                    <input type='text' className={`form-control ${errors.lokalizacja ? 'is-invalid' : ''}`} id='lokalizacja' value={lokalizacja} onChange={(e) => setLokalizacja(e.target.value)} />
                                    <div className='invalid-feedback'>{errors.lokalizacja}</div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='temperatura' className='form-label'>Temperatura</label>
                                    <input type='text' className={`form-control ${errors.temperatura ? 'is-invalid' : ''}`} id='temperatura' value={temperatura} onChange={(e) => setTemperatura(e.target.value)} />
                                    <div className='invalid-feedback'>{errors.temperatura}</div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='wilgotnosc' className='form-label'>Wilgotność</label>
                                    <input type='text' className={`form-control ${errors.wilgotnosc ? 'is-invalid' : ''}`} id='wilgotnosc' value={wilgotnosc} onChange={(e) => setWilgotnosc(e.target.value)} />
                                    <div className='invalid-feedback'>{errors.wilgotnosc}</div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='pojemnosc' className='form-label'>Pojemność</label>
                                    <input type='text' className={`form-control ${errors.pojemnosc ? 'is-invalid' : ''}`} id='pojemnosc' value={pojemnosc} onChange={(e) => setPojemnosc(e.target.value)} />
                                    <div className='invalid-feedback'>{errors.pojemnosc}</div>
                                </div>
                                <button type='submit' className='btn btn-primary'>{id ? 'Zapisz zmiany' : 'Dodaj magazyn'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MagazynComponent;
