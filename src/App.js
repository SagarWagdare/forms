import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import StartPage from './pages/StartPage';
import FormPage from './pages/FormPage';

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<StartPage />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
