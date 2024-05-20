import React, { useEffect, useState } from 'react';
import { createWinnica, getWinnica, updateWinnica } from '../services/WinnicaService';
import { useNavigate, useParams } from 'react-router-dom';

const WinnicaComponent = () => {
  const [nazwa, setNazwa] = useState('');
  const [adres, setAdres] = useState('');
  const [rokZalozenia, setRokZalozenia] = useState('');

  const { id } = useParams();
  const [errors, setErrors] = useState({
    nazwa: '',
    adres: '',
    rokZalozenia: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchWinnica(id);
    }
  }, [id]);

  const fetchWinnica = async (id) => {
    try {
      const response = await getWinnica(id);
      const { nazwa, adres, rokZalozenia } = response.data;
      setNazwa(nazwa);
      setAdres(adres);
      setRokZalozenia(rokZalozenia);
    } catch (error) {
      console.error(error);
    }
  };

  const saveOrUpdateWinnica = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const winnica = { nazwa, adres, rokZalozenia };

      try {
        if (id) {
          await updateWinnica(id, winnica);
        } else {
          await createWinnica(winnica);
        }
        navigate('/winnice');
      } catch (error) {
        console.error('Błąd podczas zapisywania winnicy:', error);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (!nazwa.trim()) {
      errorsCopy.nazwa = 'Nazwa jest wymagana';
      valid = false;
    } else {
      errorsCopy.nazwa = '';
    }

    if (!adres.trim()) {
      errorsCopy.adres = 'Adres jest wymagany';
      valid = false;
    } else {
      errorsCopy.adres = '';
    }

    if (!rokZalozenia.trim()) {
      errorsCopy.rokZalozenia = 'Rok założenia jest wymagany';
      valid = false;
    } else {
      errorsCopy.rokZalozenia = '';
    }

    setErrors(errorsCopy);
    return valid;
  };

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>{id ? 'Edytuj winnicę' : 'Dodaj winnicę'}</h2>
          <div className='card-body'>
            <form onSubmit={saveOrUpdateWinnica}>
              <div className='form-group mb-2'>
                <label className='form-label'>Nazwa:</label>
                <input
                  type='text'
                  placeholder='Wpisz nazwę winnicy'
                  name='nazwa'
                  value={nazwa}
                  className={`form-control ${errors.nazwa ? 'is-invalid' : ''}`}
                  onChange={(e) => setNazwa(e.target.value)}
                />
                {errors.nazwa && <div className='invalid-feedback'>{errors.nazwa}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Adres:</label>
                <input
                  type='text'
                  placeholder='Wpisz adres winnicy'
                  name='adres'
                  value={adres}
                  className={`form-control ${errors.adres ? 'is-invalid' : ''}`}
                  onChange={(e) => setAdres(e.target.value)}
                />
                {errors.adres && <div className='invalid-feedback'>{errors.adres}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Rok Założenia:</label>
                <input
                  type='text'
                  placeholder='Wpisz rok założenia winnicy'
                  name='rokZalozenia'
                  value={rokZalozenia}
                  className={`form-control ${errors.rokZalozenia ? 'is-invalid' : ''}`}
                  onChange={(e) => setRokZalozenia(e.target.value)}
                />
                {errors.rokZalozenia && <div className='invalid-feedback'>{errors.rokZalozenia}</div>}
              </div>
              <button type='submit' className='btn btn-success'>
                Zatwierdź
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnicaComponent;
