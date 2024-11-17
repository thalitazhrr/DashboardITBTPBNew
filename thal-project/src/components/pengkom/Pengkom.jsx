import React, { useState, useEffect } from 'react';
import profileImg from '../../assets/profile.jpg';
import pengkomImg from '../../assets/komputasional1.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import './pengkom.css';

const Pengkom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state || {};
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(location.state);
    if (userData && userData.username) {
      const db = getDatabase();
      const progressRef = ref(db, `history/${userData.username}/course/Quiz 1: Pengkom/progress`);

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

  const handleDetailClick = () => {
    navigate('/detailpengkom', { state: { userData } });
  };

  const handleBackClick = () => {
    navigate('/dashboard', { state: { userData } });
  };

  return (
    <>
      <header className="navbar-d">
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
          <li><a onClick={handleRiwayatClick}>Riwayat Latihan</a></li>
        </ul>
        <div className="notifikasi">
          <i className="far fa-bell"></i>
        </div>
      </header>

      <div className="dashboard" id="dashboard">
        <div className="dashboard-container">
          <div className="left-container"></div>
          <div className="right-container">
            <div className="top-container">
              <a onClick={handleBackClick}><i className="fas fa-arrow-left"></i> Dashboard <span>Berpikir Komputasional</span></a>
            </div>
            <div className="bottom-container">
              <div className="bottom-container-header">
                <div className="bottom-container-header-img">
                  <img className="logo" src={pengkomImg} alt="pengkom" />
                </div>
                <div className="bottom-container-header-text">
                  <h1>Berpikir Komputasional</h1>
                  <p>Nurfatul Jamnah, S.Pd</p>
                </div>
              </div>
              <div className="bottom-container-content">
                <div className="bottom-left">
                  <div className="bottom-left-top">
                    <h1>Saran Latihan Lainnya</h1>
                    <div className="latihan">
                      <h3>Basic Python</h3>
                      <p>Berpikir Komputasional</p>
                      <p className="time"><i className="far fa-clock"></i> 5 menit</p>
                    </div>
                    <div className="latihan">
                      <h3>Basic Python</h3>
                      <p>Berpikir Komputasional</p>
                      <p className="time"><i className="far fa-clock"></i> 10 menit</p>
                    </div>
                    <div className="latihan">
                      <h3>Basic Python</h3>
                      <p>Berpikir Komputasional</p>
                      <p className="time"><i className="far fa-clock"></i> 4 menit</p>
                    </div>
                  </div>
                  <div className="bottom-left-bottom">
                    <div className="calendar-header">
                      <button className="prev-month">&lt;</button>
                      <div className="month-year">
                        <span className="month">October</span>
                        <span className="year">2024</span>
                      </div>
                      <button className="next-month">&gt;</button>
                    </div>

                    <table className="calendar-table">
                      <thead>
                        <tr>
                          <th>Mon</th>
                          <th>Tue</th>
                          <th>Wed</th>
                          <th>Thu</th>
                          <th>Fri</th>
                          <th>Sat</th>
                          <th>Sun</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="prev-month">30</td>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                          <td>5</td>
                          <td className="sun">6</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>8</td>
                          <td>9</td>
                          <td>10</td>
                          <td>11</td>
                          <td>12</td>
                          <td className="sun">13</td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>15</td>
                          <td>16</td>
                          <td>17</td>
                          <td>18</td>
                          <td>19</td>
                          <td className="sun">20</td>
                        </tr>
                        <tr>
                          <td>21</td>
                          <td>22</td>
                          <td>23</td>
                          <td id="today">24</td>
                          <td>25</td>
                          <td>26</td>
                          <td className="sun">27</td>
                        </tr>
                        <tr>
                          <td>28</td>
                          <td>29</td>
                          <td>30</td>
                          <td>31</td>
                          <td className="next-month">1</td>
                          <td className="next-month">2</td>
                          <td className="next-month">3</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="calendar-footer">
                      <span>Thursday, 24 October 2024</span>
                    </div>
                  </div>
                </div>
                <div className="bottom-right">
                  <div className="bottom-right-header">
                    <img src={profileImg} alt="User Avatar" className="user-avatar" />
                    <input type="text" placeholder="Umumkan Sesuatu ke Berpikir Komputasional" />
                  </div>
                  <div className="quiz" id="quiz1" onClick={handleDetailClick}>
                    <div className="quiz-header-detail">
                      <h3>Quiz 1: Yuk uji kemampuan Komputasional Dasar-mu!</h3>
                      <p>Rabu, 3 Agustus 2021</p>
                    </div>
                    <div className="quiz-info">
                      <div className="deadline">
                        <span>Tenggat: Senin, 8 Agustus 18:00</span>
                      </div>
                      <div className="grade">
                        <span>Nilai: <span id="score">{progress}</span></span>
                      </div>
                    </div>
                    <div className="quiz-content">
                      <p>Menguji kemampuan Mahasiswa TPB terkait dasar-dasar komputasi, mencakup sintaks sederhana. Quiz ini bertujuan untuk mengukur sejauh mana pemahaman mahasiswa terhadap materi yang telah diajarkan di kelas, serta membantu mempersiapkan mereka untuk ujian mendatang. Selamat mengerjakan!</p>
                      <div className="progress-bar">
                        <div
                          className={`progress-fill ${progress < 50 ? 'red' : progress < 75 ? 'yellow' : 'green'}`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="quiz-actions">
                      <button className="start-task-btn" id="startTask">Start Task</button>
                    </div>

                    <div className="quiz-comment">
                      <img src={profileImg} alt="User Avatar" className="user-avatar" />
                      <input type="text" placeholder="Tambahkan komentar pribadi" />
                    </div>
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

export default Pengkom;