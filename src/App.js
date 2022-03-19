import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter, Switch} from 'react-router-dom'
import OverviewService from './Pages/OverviewService'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:merchant_name" element={<OverviewService/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
