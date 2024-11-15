import React, { useState, useEffect } from 'react'
import './quizpengkom.css'
import profileImg from '../../assets/profile.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from 'firebase/database';

const QuizPengkom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state || {};
  const [poin, setPoin] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));

  useEffect(() => {
    displayQuestion(currentQuestionIndex);
  }, [currentQuestionIndex]);

  const handleDashboardClick = () => {
    navigate('/dashboard', { state: { userData } });
  }

  const saveScoreToFirebase = (score) => {
    const db = getDatabase();
    const userRef = ref(db, 'history/' + userData.username + '/course/Quiz 1: Pengkom');
    set(userRef, {
      progress: score,
    }).then(() => {
      console.log("Score saved successfully!");
    }).catch((error) => {
      console.error("Error saving score: ", error);
    });
  };

  const questions = [
    {
      question: "Apa yang dimaksud dengan kemampuan Penggunaan Logika dalam Berpikir Komputasional?",
      answers: ["A. Kemampuan untuk membuat keputusan tanpa alasan yang jelas", "B. Kemampuan untuk menggunakan pengetahuan empiris", "C. Kemampuan untuk mengembangkan dan menguji solusi", "D. Kemampuan untuk mengabaikan logika dalam memecahkan masalah"],
      correct: "C"
    },
    {
      question: "Karakteristik Berpikir Komputasi meliputi hal-hal berikut, kecuali:",
      answers: ["A. Kolaborasi", "B. Pemecahan Masalah Secara Sistematis", "C. Desain Seni", "D. Analisis Data"],
      correct: "C"
    },
    {
      question: "Salah satu langkah dalam konsep Berpikir Komputasional adalah:",
      answers: ["A. Pemecahan Masalah Acak", "B. Analisis Musim", "C. Desain Algoritma", "D. Pembuatan Puisi"],
      correct: "C"
    },
    {
      question: "Apa yang dimaksud dengan kemampuan Analisis Data dalam Berpikir Komputasional?",
      answers: ["A. Kemampuan untuk menganalisis data dalam karya seni", "B. Kemampuan untuk mengidentifikasi pola dan kesamaan dalam data", "C. Kemampuan untuk menghasilkan data tanpa pola", "D. Kemampuan untuk mengabaikan data"],
      correct: "B"
    },
    {
      question: "Langkah apa yang membantu kita menemukan algoritma atau metode yang paling efektif untuk menyelesaikan masalah dalam Berpikir Komputasional?",
      answers: ["A. Decomposition", "B. Pattern Recognition", "C. Abstraction", "D. Algorithm Design"],
      correct: "B"
    },
    {
      question: "Apa yang dimaksud dengan kemampuan Kolaborasi dalam Berpikir Komputasional?",
      answers: ["A. Kemampuan untuk bekerja sama dan berkolaborasi dengan orang lain dalam pemecahan masalah yang kompleks", "B. Kemampuan untuk bekerja sendiri tanpa bantuan orang lain", "C. Kemampuan untuk menolak bantuan orang lain", "D. Kemampuan untuk menghindari kerja kelompok"],
      correct: "A"
    },
    {
      question: "Karakteristik Berpikir Komputasi mencakup hal-hal berikut, kecuali:",
      answers: ["A. Pemecahan Masalah Secara Sistematis", "B. Analisis Data", "C. Desain Algoritma", "D. Pembuatan Puisi"],
      correct: "D"
    },
    {
      question: "Apa yang dimaksud dengan kemampuan Decomposition dalam Berpikir Komputasional?",
      answers: ["A. Proses membuat masalah menjadi lebih kompleks", "B. Proses memecah masalah kompleks menjadi bagian yang lebih kecil dan lebih mudah dikelola", "C. Proses mengabaikan bagian penting dari masalah", "D. Proses mengabaikan masalah secara keseluruhan"],
      correct: "B"
    },
    {
      question: "Salah satu langkah dalam konsep Berpikir Komputasional adalah:",
      answers: ["A. Analisis Musik", "B. Pengenalan Wajah", "C. Abstraksi", "D. Pembuatan Kue"],
      correct: "C"
    },
    {
      question: "Apa yang dimaksud dengan kemampuan Abstraksi dalam Berpikir Komputasional?",
      answers: ["A. Kemampuan untuk menambahkan detail yang tidak penting dalam masalah", "B. Kemampuan untuk mengabaikan inti dari masalah", "C. Kemampuan untuk mengambil inti dari masalah dan mengabaikan detail yang tidak penting", "D. Kemampuan untuk memperbesar masalah menjadi lebih kompleks"],
      correct: "C"
    }
  ];

  const displayQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      const question = questions[index];
      const selectedAnswer = selectedAnswers[index];
    }
  };

  const handleAnswerSelect = (selectedAnswer) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = selectedAnswer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const calculateAndRedirect = () => {
    let score = 0;
  
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        score += 10;
      }
    });
  
    saveScoreToFirebase(score);
  
    setPoin(score);
    navigate('/pengkom', { state: { userData } });
  }
  
  const handleNavigation = (direction) => {
    if (direction === 'next' && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (direction === 'back' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (direction === 'finish') {
      calculateAndRedirect();
    }
  }

  return (
    <div>
      <header className="navbar">
        <div className="profile">
          <div className="profile-img">
            <img src={profileImg} alt="Profile Image" />
          </div>
          <div className="profile-name">
            {userData ? (
              <>
                <h4>{userData.username}</h4>
                <p>{userData.nim}</p>
                <p>Mahasiswa {userData.fakultas} ITB 2022</p>
              </>
            ) : (
              <p>Data not found</p>
            )}
          </div>
        </div>
        <ul>
          <li><a onClick={handleDashboardClick} href="#">Dashboard</a></li>
          <li><a href="#">Tentang ITB</a></li>
          <li><a href="#">Jadwal</a></li>
          <li><a href="#">Level Siswa</a></li>
          <li><a href="#">Riwayat Latihan</a></li>
        </ul>
        <div className="notifikasi">
          <i className="far fa-bell"></i>
        </div>
      </header>

      <div className="quiz">
        <div className="quiz-header">
          <h1>Quiz Matematika</h1>
        </div>
        <div className="quiz-container">
          <div className="left-container-q">
            <div className="navigation-number">
              <ul>
                {[...Array(10)].map((_, index) => (
                  <li key={index}>
                    <a href="#" onClick={() => setCurrentQuestionIndex(index)}>
                      {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right-container-q">
            <div className="question">
              <h2>Soal {currentQuestionIndex + 1}</h2>
              <p>{questions[currentQuestionIndex].question}</p>
            </div>
            <div className="answer">
              {questions[currentQuestionIndex].answers.map((answer, i) => (
                <button
                  key={i}
                  className={`answer-btn ${selectedAnswers[currentQuestionIndex] === `ABCD`[i] ? 'selected' : ''}`}
                  data-answer={`ABCD`[i]}
                  onClick={() => handleAnswerSelect(`ABCD`[i])}
                >
                  {answer}
                </button>
              ))}
            </div>
            <div className="button">
              <button className="btn" onClick={() => handleNavigation('back')}>Back</button>
              <button className="btn" onClick={() => handleNavigation(currentQuestionIndex === questions.length - 1 ? 'finish' : 'next')}>
                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPengkom;
