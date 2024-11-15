import React, { useState, useEffect } from 'react';
import './detail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import profileImg from '../../assets/profile.jpg';
import mathImg from '../../assets/math.png';
import { getDatabase, ref , onValue } from 'firebase/database';

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state || {};
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(location.state);
    if (userData && userData.username) {
      const db = getDatabase();
      const progressRef = ref(db, `history/${userData.username}/course/Quiz 1: Matematika/progress`);

      const progressListener = onValue(progressRef, (snapshot) => {
        const progressValue = snapshot.val();
        console.log("Fetched progress: ", progressValue);
        if (progressValue !== null) {
          setProgress(progressValue);
        }
      });

      return () => {
        progressListener();
      };
    }
  }, [userData]);

  const handleDetailBackClick = () => {
    navigate('/matematika', { state: { userData: userData } });
  }

  const handleBackClick = () => {
    navigate('/dashboard', { state: { userData: userData } });
  }

  const handleQuizClick = () => {
    navigate('/quiz', { state: { userData: userData } });
  }

  return (
    <>
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
                <>
                  <p>Data not found</p>
                </>
              )}
          </div>
        </div>
        <ul>
          <li><a onClick={handleBackClick}>Dashboard</a></li>
          <li><a href="">Tentang ITB</a></li>
          <li><a href="">Jadwal</a></li>
          <li><a href="">Level Siswa</a></li>
          <li><a href="">Riwayat Latihan</a></li>
        </ul>
        <div className="notifikasi">
          <i className="far fa-bell"></i>
        </div>
      </header>
      <div className="dashboard" id="dashboard">
        <div className="dashboard-container">
          <div className="left-container"></div>
          <div className="right-container-detail">
            <div className="top-container-detail">
              <a onClick={handleDetailBackClick}><i className="fas fa-arrow-left"></i> Dashboard <span>Matematika</span></a>
            </div>
            <div className="bottom-container-detail">
              <div className="bottom-container-header-detail">
                <div className="bottom-container-header-img-detail">
                  <img className="logo-detail" src={mathImg} alt="matematika" />
                </div>
                <div className="bottom-container-header-text-detail">
                  <h1>Matematika</h1>
                  <p>Nurfatul Jamnah, S.Pd</p>
                </div>
              </div>
              <div className="bottom-container-content-detail">
                <div className="detail-quiz-detail">
                  <div className="quiz-header-detail">
                    <h3>Quiz 1: Yuk uji kemampuan Matematika Dasar-mu!</h3>
                    <p>Rabu, 3 Agustus 2021</p>
                  </div>
                  <div className="quiz-info-detail">
                    <div className="deadline-detail">
                      <span>Tenggat: Senin, 8 Agustus 18:00</span>
                    </div>
                    <div className="grade-detail">
                      <span>Nilai: <span id="score">{progress}</span></span>
                    </div>
                  </div>
                  <div className="quiz-content-detail">
                    <p>Menguji kemampuan Mahasiswa TPB terkait dasar-dasar matematika, mencakup operasi matematika sederhana. Quiz ini bertujuan untuk mengukur sejauh mana pemahaman mahasiswa terhadap materi yang telah diajarkan di kelas, serta membantu mempersiapkan mereka untuk ujian mendatang. Selamat mengerjakan!</p>
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${progress < 50 ? 'red' : progress < 75 ? 'yellow' : 'green'}`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="quiz-actions-detail">
                    <button className="start-task-btn-detail" id="startTask" onClick={handleQuizClick}>Start Task</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;