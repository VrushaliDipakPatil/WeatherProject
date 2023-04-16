
import FirstPage from './Components/FirstPage';
import './App.css';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import SecondPage from './Components/SecondPage';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/weatherdata" element={<SecondPage />} />
      </Routes>
    </>
  );
}

export default App;
