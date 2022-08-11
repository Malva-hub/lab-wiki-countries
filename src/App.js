
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      <Navbar/>

      <CountriesList/>

      <Routes>
          
          <Route path="/:country" element={<CountryDetails />}>     </Route>

      </Routes>


    </div>
  );
}

export default App;
