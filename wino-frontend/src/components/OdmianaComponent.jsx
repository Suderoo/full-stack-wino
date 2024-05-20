import React, { useEffect, useState } from 'react';
import { createOdmiana, getOdmiana, updateOdmiana } from '../services/OdmianaService';
import { useNavigate, useParams } from 'react-router-dom';

const OdmianaComponent = () => {
  const [nazwa, setNazwa] = useState('');
  const [opis, setOpis] = useState('');
  const [krajPochodzenia, setKrajPochodzenia] = useState('');
  const [zawartoscCukru, setZawartoscCukru] = useState('');
  const [kwasowosc, setKwasowosc] = useState('');

  const { id } = useParams();
  const [errors, setErrors] = useState({
    nazwa: '',
    opis: '',
    krajPochodzenia: '',
    zawartoscCukru: '',
    kwasowosc: '',
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getOdmiana(id)
        .then((response) => {
          setNazwa(response.data.nazwa);
          setOpis(response.data.opis);
          setKrajPochodzenia(response.data.krajPochodzenia);
          setZawartoscCukru(response.data.zawartoscCukru);
          setKwasowosc(response.data.kwasowosc);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateOdmiana(e) {
    e.preventDefault();

    if (validateForm()) {
      const odmiana = {
        nazwa,
        opis,
        krajPochodzenia,
        zawartoscCukru,
        kwasowosc,
      };

      if (id) {
        updateOdmiana(id, odmiana)
          .then((response) => {
            console.log(response.data);
            navigator('/odmiany');
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createOdmiana(odmiana)
          .then((response) => {
            console.log(response.data);
            navigator('/odmiany');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (nazwa.trim()) {
      errorsCopy.nazwa = '';
    } else {
      errorsCopy.nazwa = 'Nazwa jest wymagana';
      valid = false;
    }

    if (opis.trim()) {
      errorsCopy.opis = '';
    } else {
      errorsCopy.opis = 'Opis jest wymagany';
      valid = false;
    }

    if (krajPochodzenia.trim()) {
      errorsCopy.krajPochodzenia = '';
    } else {
      errorsCopy.krajPochodzenia = 'Kraj pochodzenia jest wymagany';
      valid = false;
    }

    if (zawartoscCukru.trim()) {
      errorsCopy.zawartoscCukru = '';
    } else {
      errorsCopy.zawartoscCukru = 'Zawartość cukru jest wymagana';
      valid = false;
    }

    if (kwasowosc.trim()) {
      errorsCopy.kwasowosc = '';
    } else {
      errorsCopy.kwasowosc = 'Kwasowość jest wymagana';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Edytuj odmianę</h2>;
    } else {
      return <h2 className='text-center'>Dodaj odmianę</h2>;
    }
  }

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Nazwa</label>
                <input
                  type='text'
                  placeholder='Wpisz nazwę odmiany'
                  name='nazwa'
                  value={nazwa}
                  className={`form-control ${errors.nazwa ? 'is-invalid' : ''}`}
                  onChange={(e) => setNazwa(e.target.value)}
                />
                {errors.nazwa && <div className='invalid-feedback'>{errors.nazwa}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Opis</label>
                <input
                  type='text'
                  placeholder='Wpisz opis odmiany'
                  name='opis'
                  value={opis}
                  className={`form-control ${errors.opis ? 'is-invalid' : ''}`}
                  onChange={(e) => setOpis(e.target.value)}
                />
                {errors.opis && <div className='invalid-feedback'>{errors.opis}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Kraj pochodzenia</label>
                <input
                  type='text'
                  placeholder='Wpisz kraj pochodzenia odmiany'
                  name='krajPochodzenia'
                  value={krajPochodzenia}
                  className={`form-control ${errors.krajPochodzenia ? 'is-invalid' : ''}`}
                  onChange={(e) => setKrajPochodzenia(e.target.value)}
                />
                {errors.krajPochodzenia && (
                  <div className='invalid-feedback'>{errors.krajPochodzenia}</div>
                )}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Zawartość cukru</label>
                <input
                  type='text'
                  placeholder='Wpisz zawartość cukru odmiany'
                  name='zawartoscCukru'
                  value={zawartoscCukru}
                  className={`form-control ${errors.zawartoscCukru ? 'is-invalid' : ''}`}
                  onChange={(e) => setZawartoscCukru(e.target.value)}
                />
                {errors.zawartoscCukru && (
                  <div className='invalid-feedback'>{errors.zawartoscCukru}</div>
                )}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Kwasowość</label>
                <input
                  type='text'
                  placeholder='Wpisz kwasowość odmiany'
                  name='kwasowosc'
                  value={kwasowosc}
                  className={`form-control ${errors.kwasowosc ? 'is-invalid' : ''}`}
                  onChange={(e) => setKwasowosc(e.target.value)}
                />
                {errors.kwasowosc && <div className='invalid-feedback'>{errors.kwasowosc}</div>}
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateOdmiana}>
                Zatwierdź
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdmianaComponent;
