import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPracownikComponent from './components/ListPracownikComponent'
import ListMagazynComponent from './components/ListMagazynComponent'
import PracownikComponent from './components/PracownikComponent'
import MagazynComponent from './components/MagazynComponent';

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

            
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
