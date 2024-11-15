import React, { useState, useEffect } from 'react'
import './quiz.css'
import profileImg from '../../assets/profile.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from 'firebase/database';

const Quiz = () => {
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
    const userRef = ref(db, 'history/' + userData.username + '/course/Quiz 1: Matematika');
    set(userRef, {
      progress: score,
    }).then(() => {
      console.log("Score saved successfully!");
    }).catch((error) => {
      console.error("Error saving score: ", error);
    });
  };  

  const questions = [
    { question: "2 + 2 = ?", answers: ["A. 4", "B. 5", "C. 6", "D. 7"], correct: "A" },
    { question: "5 - 3 = ?", answers: ["A. 3", "B. 2", "C. 4", "D. 1"], correct: "B" },
    { question: "6 / 2 = ?", answers: ["A. 3", "B. 4", "C. 2", "D. 6"], correct: "A" },
    { question: "3 * 3 = ?", answers: ["A. 6", "B. 9", "C. 12", "D. 8"], correct: "B" },
    { question: "10 - 4 = ?", answers: ["A. 7", "B. 6", "C. 5", "D. 8"], correct: "B" },
    { question: "8 + 2 = ?", answers: ["A. 10", "B. 11", "C. 9", "D. 8"], correct: "A" },
    { question: "7 - 5 = ?", answers: ["A. 1", "B. 2", "C. 3", "D. 4"], correct: "B" },
    { question: "9 / 3 = ?", answers: ["A. 2", "B. 3", "C. 4", "D. 5"], correct: "B" },
    { question: "4 * 2 = ?", answers: ["A. 6", "B. 7", "C. 8", "D. 9"], correct: "C" },
    { question: "5 + 5 = ?", answers: ["A. 9", "B. 10", "C. 11", "D. 12"], correct: "B" }
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
    navigate('/matematika', { state: { userData } });
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

export default Quiz;
