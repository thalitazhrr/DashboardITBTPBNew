import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import firebaseApp from '../../../../services/firebase-sdk';
import { getDatabase, ref, set } from 'firebase/database';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nim, setNim] = useState('');
  const [fakultas, setFakultas] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const db = getDatabase(firebaseApp);
      const userRef = ref(db, 'users/' + username);
      await set(userRef, {
        username,
        password,
        nim,
        fakultas,
      });
      alert('User registered successfully');
      navigate('/');

      const scoreRef = ref(db, 'history/' + username + '/course/Quiz 1: Matematika');
      await set(scoreRef, {
        progress: 0,
      });

      const scoreRef1 = ref(db, 'history/' + username + '/course/Quiz 1: Pengkom');
      await set(scoreRef1, {
        progress: 0,
      });

    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user');
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-header">
          <h1>REGISTER</h1>
        </div>
        <div className="register-body">
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
              <label htmlFor="nim">NIM</label>
              <input
                type="text"
                name="nim"
                id="nim"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                required
                autoComplete="off"
              />
              <label htmlFor="fakultas">Fakultas</label>
              <input
                type="text"
                name="fakultas"
                id="fakultas"
                value={fakultas}
                onChange={(e) => setFakultas(e.target.value)}
                required
                autoComplete="off"
              />
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
        <div className="register-footer">
          <p>
            Already have an account?{' '}
            <span
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;