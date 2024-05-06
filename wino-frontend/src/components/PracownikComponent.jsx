import React, { useEffect, useState } from 'react'
import { createPracownik, getPracownik, updatePracownik } from '../services/PracownikService'
import { useNavigate, useParams } from 'react-router-dom'

const PracownikComponent = () => {

    const [imie, setImie] = useState('')
    const [nazwisko, setNazwisko] = useState('')
    const [email, setEmail] = useState('')
    const [numerTelefonu, setNumerTefonu] = useState('')
    const [stanowisko, setStanowisko] = useState('')
    const [wynagrodzenie, setWynagrodzenie] = useState('')

    const {id} = useParams();
    const [errors, setErrors] = useState({
        imie: '',
        nazwisko: '',
        email: '',
        numerTelefonu: '',
        stanowisko: '',
        wynagrodzenie: ''
    })

    const navigator = useNavigate();

    useEffect(() => {

        if(id){
            getPracownik(id).then((response) => {
                setImie(response.data.imie);
                setNazwisko(response.data.nazwisko);
                setEmail(response.data.email);
                setNumerTefonu(response.data.numerTelefonu);
                setStanowisko(response.data.stanowisko);
                setWynagrodzenie(response.data.wynagrodzenie);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function saveOrUpdatePracownik(e){
        e.preventDefault();

        if(validateForm()){

            const pracownik = {imie, nazwisko, email, numerTelefonu, stanowisko, wynagrodzenie}
            console.log()

            if(id){
                updatePracownik(id, pracownik).then((response) => {
                    console.log(response.data);
                    navigator('/pracownicy');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createPracownik(pracownik).then((response) => {
                    console.log(response.data);
                    navigator('/pracownicy')
                }).catch(error =>(error));
            }
        }
        
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(imie.trim()){
            errorsCopy.imie = '';
        } else {
            errorsCopy.imie = 'Imię jest wymagane';
            valid = false;
        }

        if(nazwisko.trim()){
            errorsCopy.nazwisko = '';
        } else {
            errorsCopy.nazwisko = 'Nazwisko jest wymagane';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'E-mail jest wymagany';
            valid = false;
        }

        if(numerTelefonu.trim()){
            errorsCopy.numerTelefonu = '';
        } else {
            errorsCopy.numerTelefonu = 'Numer telefonu jest wymagany';
            valid = false;
        }

        if(stanowisko.trim()){
            errorsCopy.stanowisko = '';
        } else {
            errorsCopy.stanowisko = 'Stanowisko jest wymagany';
            valid = false;
        }

        if(wynagrodzenie.trim()){
            errorsCopy.wynagrodzenie = '';
        } else {
            errorsCopy.wynagrodzenie = 'Wynagrodzenie jest wymagany';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Edytuj pracownika</h2>
        }else {
            return <h2 className='text-center'>Dodaj pracownika</h2>
        }
    }

  return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Imie</label>
                            <input
                                type='text'
                                placeholder='Wpisz imię pracownika'
                                name='imie'
                                value={imie}
                                className={`form-control ${ errors.imie ? 'is-invalid': '' } `}
                                onChange={(e) => setImie(e.target.value)}>

                                </input>
                                { errors.imie && <div className='invalid-feedback'> { errors.imie} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Nazwisko</label>
                            <input
                                type='text'
                                placeholder='Wpisz nazwisko pracownika'
                                name='nazwisko'
                                value={nazwisko}
                                className={`form-control ${ errors.nazwisko ? 'is-invalid': '' } `}
                                onChange={(e) => setNazwisko(e.target.value)}>

                                </input>
                                { errors.nazwisko && <div className='invalid-feedback'> { errors.nazwisko} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>E-mail</label>
                            <input
                                type='text'
                                placeholder='Wpisz email pracownika'
                                name='email'
                                value={email}
                                className={`form-control ${ errors.email ? 'is-invalid': '' } `}
                                onChange={(e) => setEmail(e.target.value)}>

                                </input>
                                { errors.email && <div className='invalid-feedback'> { errors.email} </div>}
                        </div>

                       
                        <div className='form-group mb-2'>
                            <label className='form-label'>Numer Telefonu</label>
                            <input
                                type='text'
                                placeholder='Wpisz numer telefonu pracownika'
                                name='numerTelefonu'
                                value={numerTelefonu}
                                className={`form-control ${ errors.numerTelefonu ? 'is-invalid': '' } `}
                                onChange={(e) => setNumerTefonu(e.target.value)}>

                                </input>
                                { errors.numerTelefonu && <div className='invalid-feedback'> { errors.numerTelefonu} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Stanowisko</label>
                            <input
                                type='text'
                                placeholder='Wpisz stanowisko pracownika'
                                name='stanowisko'
                                value={stanowisko}
                                className={`form-control ${ errors.stanowisko ? 'is-invalid': '' } `}
                                onChange={(e) => setStanowisko(e.target.value)}>

                                </input>
                                { errors.stanowisko && <div className='invalid-feedback'> { errors.stanowisko} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Wynagrodzenie</label>
                            <input
                                type='text'
                                placeholder='Wpisz wynagrodzenie pracownika'
                                name='wynagrodzenie'
                                value={wynagrodzenie}
                                className={`form-control ${ errors.wynagrodzenie ? 'is-invalid': '' } `}
                                onChange={(e) => setWynagrodzenie(e.target.value)}>

                                </input>
                                { errors.wynagrodzenie && <div className='invalid-feedback'> { errors.wynagrodzenie} </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdatePracownik}>Zatwierdź</button>
                    </form>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default PracownikComponent