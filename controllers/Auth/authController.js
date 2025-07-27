const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

// For now, hardcoded users
const hardcodedUsers = [
  { username: 'admin', password: 'adminpass', role: 'admin' },
  { username: 'teacher', password: 'teacherpass', role: 'teacher' },
  { username: 'student', password: 'studentpass', role: 'student' },
];

exports.login = async (req, res) => {
  const { username, password, role } = req.body;

  const found = hardcodedUsers.find(
    (u) => u.username === username && u.password === password && u.role === role
  );

  if (!found) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // In real system, get from DB and use bcrypt.compare
  const token = jwt.sign(
    { username: found.username, role: found.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return res.json({ token, role: found.role });
};
