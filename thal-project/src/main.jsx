import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Matematika from './components/matematika/Matematika';
import Pengkom from './components/pengkom/Pengkom';
import Detail from './components/detail/Detail';
import DetailPengkom from './components/detailpengkom/DetailPengkom';
import Quiz from './components/quiz/Quiz';
import QuizPengkom from './components/quizpengkom/QuizPengkom';
import Riwayat from './components/riwayat/Riwayat';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matematika" element={<Matematika />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/pengkom" element={<Pengkom />} />
        <Route path="/detailpengkom" element={<DetailPengkom />} /> 
        <Route path="/quizpengkom" element={<QuizPengkom />} /> 
        <Route path="/riwayat" element={<Riwayat />} />
      </Routes>
    </Router>
  </StrictMode>,
);