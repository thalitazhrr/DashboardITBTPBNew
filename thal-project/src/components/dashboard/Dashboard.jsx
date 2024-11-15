import React from 'react';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import profileImg from '../../assets/profile.jpg';
import logoITB from '../../assets/logo-itb.png';
import matematika1 from '../../assets/matematika1.jpg';
import komputasional1 from '../../assets/komputasional1.jpg';
import kimia1 from '../../assets/kimia1.jpg';
import labfisika1 from '../../assets/labfisika1.jpg';
import lab2 from '../../assets/lab2.jpg';
import pancasila1 from '../../assets/pancasila1.jpg';
import fisikafix from '../../assets/fisikafix.jpg';
import computational from '../../assets/computational.png';
import pancasila from '../../assets/pancasila.png';
import math from '../../assets/math.png';
import kimia from '../../assets/kimia.png';
import fisika from '../../assets/fisika.png';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state || {};

  const handleMatematikaClick = () => {
    navigate('/matematika', { state: { userData } });
  };

  const handlePengkomClick = () => {
    navigate('/pengkom', { state: { userData } });
  };

  const handleRiwayatClick = () => {
    navigate('/riwayat', { state: { userData } });
  };

  return (
    <>
      <header className="navbar-d">
        <div className="profile-d">
          <div className="profile-img-d">
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="profile-name-d">
            {userData ? (
                <div>
                  <h4>{userData.username}</h4>
                  <p>{userData.nim}</p>
                  <p>Mahasiswa {userData.fakultas} ITB 2022</p>
                </div>
              ) : (
                <h4>User data not found</h4>
              )}
          </div>
        </div>
        <ul>
          <li><a href="index.html">Dashboard</a></li>
          <li><a href="">Tentang ITB</a></li>
          <li><a href="">Jadwal</a></li>
          <li><a href="">Level Siswa</a></li>
          <li><a onClick={handleRiwayatClick}>Riwayat Latihan</a></li>
        </ul>
        <div className="notifikasi-d">
          <i className="far fa-bell"></i>
        </div>
      </header>

      <div className="dashboard-d" id="dashboard">
        <div className="dashboard-container-d">
          <div className="left-container-d">
            <div className="logo-d">
              <img src={logoITB} alt="Logo ITB" />
            </div>
            <div className="left-text-d">
              <h3>Dashboard <i className="fas fa-arrow-right"></i></h3>
              <h3 className="daftar-matkul-d">Daftar Mata Kuliah<span className="semester"> Semester 1</span></h3>
            </div>
            <div className="left-navigation-d">
              <ul>
                <li><a onClick={handleMatematikaClick}>Matematika I</a></li>
                <li><a onClick={handlePengkomClick}>Berpikir Komputasional</a></li>
                <li><a href="">Fisika Dasar I</a></li>
                <li><a href="">Kimia Dasar I</a></li>
                <li><a href="">Pancasila</a></li>
                <li><a href="">Pengantar Prinsip..</a></li>
              </ul>
            </div>
          </div>
          <div className="right-container-d">
            <div className="top-container-d">
              <div className="search-bar-d">
                <input type="text" placeholder="Search" />
                <button><i className="fas fa-search"></i></button>
              </div>
              <div className="calendar-d">
                <div className="left-calendar-d">
                  <div className="judul-d">
                    <h1>Welcome Back, <span>{userData.username}!</span></h1>
                  </div>
                  <div className="isi-d">
                    <p className="isi-1">Yuk, latihan dan lancarkan kompetensimu di Mata Kuliah Tahap Persiapan Bersama</p>
                    <p className="isi-2">Intip <span>Jadwal Terdekat!</span></p>
                    <button>Go To Jadwal</button>
                  </div>
                  <div className="riwayat-button">
                    <p>Riwayat Belajar</p>
                    <div className="riwayat-img">
                      <div className="riwayat-1">
                        <img className="small-logo" src={kimia} alt="Icon 1" />
                      </div>
                      <div className="riwayat-2">
                        <img className="small-logo" src={fisika} alt="Icon 2" />
                      </div>
                      <div className="riwayat-3">
                        <img className="small-logo" src={pancasila} alt="Icon 3" />
                      </div>
                      <div className="riwayat-4">
                        <img className="small-logo" src={computational} alt="Icon 4" />
                      </div>
                      <div className="riwayat-5">
                        <img className="small-logo" src={math} alt="Icon 5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-calendar">
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
            </div>
            <div className="bottom-container-d">
              <div className="matkul-d">
                <h1>Mata Kuliah</h1>
              </div>
              <div className="list-matkul-d">
                <div className="matkul-desc-d" id="matkul1" onClick={handleMatematikaClick}>
                  <div className="matkul-img-d">
                    <img src={matematika1} alt="Matematika I" />
                  </div>
                  <div className="matkul-info-d">
                    <p>Dwi Indriyati</p>
                    <h2>Matematika I</h2>
                  </div>
                  <div className="ujian">
                    <div className="ujian-kiri">
                      <i className="fas fa-circle"></i>
                      <p>Tugas</p>
                    </div>
                    <div className="ujian-kanan">
                      <i className="fas fa-circle"></i>
                      <p>Ujian</p>
                    </div>
                  </div>
                </div>
                <div className="matkul-desc-d" id="matkul2" onClick={handlePengkomClick}>
                  <div className="matkul-img-d">
                    <img src={komputasional1} alt="Komputasional I" />
                  </div>
                  <div className="matkul-info-d">
                    <p>Dwi Indriyati</p>
                    <h2>Berpikir Komputasional</h2>
                  </div>
                  <div className="ujian">
                    <div className="ujian-kiri">
                      <i className="fas fa-circle"></i>
                      <p>Tugas</p>
                    </div>
                    <div className="ujian-kanan">
                      <i className="fas fa-circle"></i>
                      <p>Ujian</p>
                    </div>
                  </div>
                </div>
                <div className="matkul-desc-d">
                  <div className="matkul-img-d">
                    <img src={kimia1} alt="Kimia I" />
                  </div>
                  <div className="matkul-info-d">
                    <p>Dwi Indriyati</p>
                    <h2>Kimia Dasar I</h2>
                  </div>
                  <div className="ujian">
                    <div className="ujian-kiri">
                      <i className="fas fa-circle"></i>
                      <p>Tugas</p>
                    </div>
                    <div className="ujian-kanan">
                      <i className="fas fa-circle"></i>
                      <p>Ujian</p>
                    </div>
                  </div>
                </div>
                <div className="matkul-desc-d">
                  <div className="matkul-img-d">
                    <img src={labfisika1} alt="Fisika I" />
                  </div>
                  <div className="matkul-info-d">
                    <p>Dwi Indriyati</p>
                    <h2>Fisika Dasar I</h2>
                  </div>
                  <div className="ujian">
                    <div className="ujian-kiri">
                      <i className="fas fa-circle"></i>
                      <p>Tugas</p>
                    </div>
                    <div className="ujian-kanan">
                      <i className="fas fa-circle"></i>
                      <p>Ujian</p>
                    </div>
                  </div>
                </div>
                <div className="matkul-desc-d">
                  <div className="matkul-img-d">
                    <img src={lab2} alt="Prinsip I" />
                  </div>
                  <div className="matkul-info-d">
                    <p>Dwi Indriyati</p>
                    <h2>Pengantar Prinsip..</h2>
                  </div>
                  <div className="ujian">
                    <div className="ujian-kiri">
                      <i className="fas fa-circle"></i>
                      <p>Tugas</p>
                    </div>
                    <div className="ujian-kanan">
                      <i className="fas fa-circle"></i>
                      <p>Ujian</p>
                    </div>
                  </div>
                </div>
                <div className="matkul-desc-d">
                  <div className="matkul-img-d">
                    <img src={pancasila1} alt="Pancasila I" />
                  </div>
                  <div className="matkul-info-d">
                    <p>Dwi Indriyati</p>
                    <h2>Pancasila</h2>
                  </div>
                  <div className="ujian">
                    <div className="ujian-kiri">
                      <i className="fas fa-circle"></i>
                      <p>Tugas</p>
                    </div>
                    <div className="ujian-kanan">
                      <i className="fas fa-circle"></i>
                      <p>Ujian</p>
                    </div>
                  </div>
                </div>
                <div className="matkul-desc-d">
                  <div className="matkul-img-d">
                    <img src={komputasional1} alt="Laboratorium I" />
                  </div>
                  <div className="matkul-info-d">
                    <p>Dwi Indriyati</p>
                    <h2>Laboratorium Inte..</h2>
                  </div>
                  <div className="ujian">
                    <div className="ujian-kiri">
                      <i className="fas fa-circle"></i>
                      <p>Tugas</p>
                    </div>
                    <div className="ujian-kanan">
                      <i className="fas fa-circle"></i>
                      <p>Ujian</p>
                    </div>
                  </div>
                </div>
                <div className="matkul-desc-d">
                  <div className="matkul-img-d">
                    <img src={fisikafix} alt="Lab Fisika I" />
                  </div>
                  <div className="matkul-info-d">
                    <p>Dwi Indriyati</p>
                    <h2>Laboratorium Fisika</h2>
                  </div>
                  <div className="ujian">
                    <div className="ujian-kiri">
                      <i className="fas fa-circle"></i>
                      <p>Tugas</p>
                    </div>
                    <div className="ujian-kanan">
                      <i className="fas fa-circle"></i>
                      <p>Ujian</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="saran-latihan">
                <h1>Saran Latihan</h1>
                <div className="latihan-d">
                  <div className="slider-container">
                    <div className="slider">
                      <div className="slide">
                        <img className="small-logo" src={computational} alt="Berpikir Komputasional" />
                        <div className="info">
                          <h2>Berpikir Komputasional</h2>
                          <p>Basic Python</p>
                          <p>Ardian Febriansyah M. Pd</p>
                          <p>⏱ 5 Menit</p>
                        </div>
                      </div>
                      <div className="slide">
                        <img className="small-logo" src={pancasila} alt="Pancasila" />
                        <div className="info">
                          <h2>Pancasila</h2>
                          <p>Dasar-dasar Pancasila</p>
                          <p>Ardian Febriansyah M. Pd</p>
                          <p>⏱ 4 Menit</p>
                        </div>
                      </div>
                      <div className="slide">
                        <img className="small-logo" src={math} alt="Matematika" />
                        <div className="info">
                          <h2>Matematika</h2>
                          <p>Turunan</p>
                          <p>Ardian Febriansyah M. Pd</p>
                          <p>⏱ 10 Menit</p>
                        </div>
                      </div>
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

export default Dashboard;