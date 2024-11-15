import React, { useState, useEffect } from 'react';
import profileImg from '../../assets/profile.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import './riwayat.css';

const Riwayat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state || {};
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    if (userData && userData.username) {
      const db = getDatabase();
      const coursesRef = ref(db, `history/${userData.username}/course`);

      // Listener to fetch courses history
      const courseListener = onValue(coursesRef, (snapshot) => {
        const coursesData = snapshot.val();
        console.log("Fetched courses data: ", coursesData);
        
        if (coursesData !== null) {
          const coursesList = Object.keys(coursesData).map(courseKey => {
            return {
              name: courseKey,
              progress: coursesData[courseKey].progress || 0
            };
          });
          setCourses(coursesList);
        }
      });

      return () => {
        courseListener();
      };
    }
  }, [userData]);

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
              <p>Data not found</p>
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

      <main className="riwayat-content">
        <h2>Riwayat Latihan</h2>
        {courses.length > 0 ? (
          <ul className="course-list">
            {courses.map((course, index) => (
              <li key={index} className="course-item">
                <h3>{course.name}</h3>
                <p>Nilai: {course.progress}%</p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No exercise history found.</p>
        )}
      </main>
    </>
  );
};

export default Riwayat;
