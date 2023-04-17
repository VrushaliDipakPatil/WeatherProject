
import FirstPage from './Components/FirstPage';
import './App.css';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import SecondPage from './Components/SecondPage';
import { useState } from 'react';



function App() {
const[data, setData] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage prop2={setData}/>} />
    <Route path="/weatherdata" element={<SecondPage state={data} />} />
      </Routes>
    </>
  );
}

export default App;
