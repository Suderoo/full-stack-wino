import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPracownikComponent from './components/ListPracownikComponent'
import ListMagazynComponent from './components/ListMagazynComponent'
import PracownikComponent from './components/PracownikComponent'
import MagazynComponent from './components/MagazynComponent';
import ListWinnicaComponent from './components/ListWinnicaComponent';
import WinnicaComponent from './components/WinnicaComponent';
import ListOdmianaComponent from './components/ListOdmianaComponent';
import OdmianaComponent from './components/OdmianaComponent';
import ListWinoComponent from './components/ListWinoComponent';
import WinoComponent from './components/WinoComponent';

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route>
            {/* // http://localhost:3000 */}
            <Route path='/' element = { <ListPracownikComponent /> }></Route>
            {/* // http://localhost:3000/pracownicy */}
            <Route path='/pracownicy' element = { <ListPracownikComponent /> }></Route>
            {/* // http://localhost:3000/addPracownik */}
            <Route path='/addPracownik' element = { <PracownikComponent /> }></Route>
            {/* // http://localhost:3000/editPracownik/1 */}
            <Route path='/editPracownik/:id' element = { <PracownikComponent /> }></Route>

            {/* // http://localhost:3000/magazyny */}
            <Route path='/magazyny' element = { <ListMagazynComponent /> }></Route>
            {/* // http://localhost:3000/addMagazyn */}
            <Route path='/addMagazyn' element={<MagazynComponent />} />
            {/* // http://localhost:3000/editMagazyn/1 */}
            <Route path='/editMagazyn/:id' element={<MagazynComponent />} />

            {/* // http://localhost:3000/winnice */}
            <Route path='/winnice' element={<ListWinnicaComponent />} />
            {/* // http://localhost:3000/addWinnice */}
            <Route path='/addWinnica' element={<WinnicaComponent />} />
            {/* // http://localhost:3000/editWinnice/1 */}
            <Route path='/editWinnica/:id' element={<WinnicaComponent />} />

            {/* // http://localhost:3000/odmiany */}
            <Route path='/odmiany' element={<ListOdmianaComponent />} />
            {/* // http://localhost:3000/addOdmiany */}
            <Route path='/addOdmiana' element={<OdmianaComponent />} />
            {/* // http://localhost:3000/editOdmiany/1 */}
            <Route path='/editOdmiana/:id' element={<OdmianaComponent />} />
            
            {/* // http://localhost:3000/wina */}
            <Route path='/wina' element={<ListWinoComponent />} />
            {/* // http://localhost:3000/addWino */}
            <Route path='/addWino' element={<WinoComponent />} />
            {/* // http://localhost:3000/editWino/1 */}
            <Route path='/editWino/:id' element={<WinoComponent />} />
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
