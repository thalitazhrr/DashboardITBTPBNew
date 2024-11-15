const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const usersFile = './users.json';

// Helper function to read users from the file
const readUsers = () => {
  if (!fs.existsSync(usersFile)) {
    return [];
  }
  const data = fs.readFileSync(usersFile);
  return JSON.parse(data);
};

// Helper function to write users to the file
const writeUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

// Register endpoint
app.post('/register', (req, res) => {
  const { username, password, nim, fakultas } = req.body;
  const users = readUsers();

  if (users.find(user => user.username === username)) {
    console.log('User already exists');
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ username, password, nim, fakultas });
  writeUsers(users);
  console.log('User registered successfully:', { username, password, nim, fakultas });

  res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});