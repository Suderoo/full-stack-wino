import React, { useEffect, useState } from 'react';
import { createWino, getWino, updateWino } from '../services/WinoService';
import { useNavigate, useParams } from 'react-router-dom';
import { listWinnice } from '../services/WinnicaService'; // Importujemy funkcję do pobierania listy winnic

const WinoComponent = () => {
  const [nazwa, setNazwa] = useState('');
  const [rocznik, setRocznik] = useState('');
  const [zawartoscAlkoholu, setZawartoscAlkoholu] = useState('');
  const [poziomSlodyczy, setPoziomSlodyczy] = useState('');
  const [cena, setCena] = useState('');
  const [winnicaId, setWinnicaId] = useState('');
  const [winnice, setWinnice] = useState([]); // Dodajemy state dla listy winnic

  const { id } = useParams();
  const [errors, setErrors] = useState({
    nazwa: '',
    rocznik: '',
    zawartoscAlkoholu: '',
    poziomSlodyczy: '',
    cena: '',
    winnicaId: '',
  });

  const navigator = useNavigate();

  useEffect(() => {
    fetchWinnice(); // Pobieramy listę winnic przy załadowaniu komponentu

    if (id) {
      getWino(id)
        .then((response) => {
          setNazwa(response.data.nazwa);
          setRocznik(response.data.rocznik);
          setZawartoscAlkoholu(response.data.zawartoscAlkoholu);
          setPoziomSlodyczy(response.data.poziomSlodyczy);
          setCena(response.data.cena);
          setWinnicaId(response.data.winnicaId);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  // Funkcja do pobierania listy winnic
  const fetchWinnice = () => {
    listWinnice()
      .then((response) => {
        setWinnice(response.data); // Ustawiamy listę winnic w stanie
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function saveOrUpdateWino(e) {
    e.preventDefault();

    if (validateForm()) {
      const wino = {
        nazwa,
        rocznik,
        zawartoscAlkoholu,
        poziomSlodyczy,
        cena,
        winnicaId,
      };

      if (id) {
        updateWino(id, wino)
          .then((response) => {
            console.log(response.data);
            navigator('/wina');
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createWino(wino)
          .then((response) => {
            console.log(response.data);
            navigator('/wina');
          })
          .catch((error) => console.error(error));
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (!nazwa.trim()) {
      errorsCopy.nazwa = 'Nazwa jest wymagana';
      valid = false;
    } else {
      errorsCopy.nazwa = '';
    }

    if (!rocznik.trim()) {
      errorsCopy.rocznik = 'Rocznik jest wymagany';
      valid = false;
    } else {
      errorsCopy.rocznik = '';
    }

    if (!zawartoscAlkoholu.trim()) {
      errorsCopy.zawartoscAlkoholu = 'Zawartość alkoholu jest wymagana';
      valid = false;
    } else {
      errorsCopy.zawartoscAlkoholu = '';
    }

    if (!poziomSlodyczy.trim()) {
      errorsCopy.poziomSlodyczy = 'Poziom słodyczy jest wymagany';
      valid = false;
    } else {
      errorsCopy.poziomSlodyczy = '';
    }

    if (!cena.trim()) {
        errorsCopy.cena = 'Cena jest wymagana';
        valid = false;
      } else {
        errorsCopy.cena = '';
      }
  
      if (!winnicaId.trim()) {
        errorsCopy.winnicaId = 'Winnica jest wymagana';
        valid = false;
      } else {
        errorsCopy.winnicaId = '';
      }
  
      setErrors(errorsCopy);
  
      return valid;
    }
  
    return (
      <div className='container'>
        <br />
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>{id ? 'Edytuj wino' : 'Dodaj wino'}</h3>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label>Nazwa:</label>
                  <input
                    placeholder='Nazwa'
                    name='nazwa'
                    className={`form-control ${errors.nazwa ? 'is-invalid' : ''}`}
                    value={nazwa}
                    onChange={(e) => setNazwa(e.target.value)}
                  />
                  <div className='invalid-feedback'>{errors.nazwa}</div>
                </div>
                <div className='form-group'>
                  <label>Rocznik:</label>
                  <input
                    placeholder='Rocznik'
                    name='rocznik'
                    className={`form-control ${errors.rocznik ? 'is-invalid' : ''}`}
                    value={rocznik}
                    onChange={(e) => setRocznik(e.target.value)}
                  />
                  <div className='invalid-feedback'>{errors.rocznik}</div>
                </div>
                <div className='form-group'>
                  <label>Zawartość alkoholu:</label>
                  <input
                    placeholder='Zawartość alkoholu'
                    name='zawartoscAlkoholu'
                    className={`form-control ${errors.zawartoscAlkoholu ? 'is-invalid' : ''}`}
                    value={zawartoscAlkoholu}
                    onChange={(e) => setZawartoscAlkoholu(e.target.value)}
                  />
                  <div className='invalid-feedback'>{errors.zawartoscAlkoholu}</div>
                </div>
                <div className='form-group'>
                  <label>Poziom słodyczy:</label>
                  <input
                    placeholder='Poziom słodyczy'
                    name='poziomSlodyczy'
                    className={`form-control ${errors.poziomSlodyczy ? 'is-invalid' : ''}`}
                    value={poziomSlodyczy}
                    onChange={(e) => setPoziomSlodyczy(e.target.value)}
                  />
                  <div className='invalid-feedback'>{errors.poziomSlodyczy}</div>
                </div>
                <div className='form-group'>
                  <label>Cena:</label>
                  <input
                    placeholder='Cena'
                    name='cena'
                    className={`form-control ${errors.cena ? 'is-invalid' : ''}`}
                    value={cena}
                    onChange={(e) => setCena(e.target.value)}
                  />
                  <div className='invalid-feedback'>{errors.cena}</div>
                </div>
                <div className='form-group'>
                  <label>Winnica:</label>
                  <select
                    className={`form-control ${errors.winnicaId ? 'is-invalid' : ''}`}
                    value={winnicaId}
                    onChange={(e) => setWinnicaId(e.target.value)}
                  >
                    <option value=''>Wybierz winnicę</option>
                    {winnice.map((winnica) => (
                      <option key={winnica.id} value={winnica.id}>
                        {winnica.nazwa}
                      </option>
                    ))}
                  </select>
                  <div className='invalid-feedback'>{errors.winnicaId}</div>
                </div>
                <button className='btn btn-success' onClick={saveOrUpdateWino}>
                  Zapisz
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WinoComponent;
  