import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // save user to localStorage (simulated DB)
    const existing = JSON.parse(localStorage.getItem('users') || '{}');
    if (existing[username]) {
      alert('User already exists!');
      return;
    }

    existing[username] = password;
    localStorage.setItem('users', JSON.stringify(existing));

    register(username);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      /><br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br />
      <button type="submit">Register</button>
    </form>
  );
}
