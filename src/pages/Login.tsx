import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SEO from '../components/SEO';

// Get registered users from localStorage
const getRegisteredUsers = () => {
  return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
};

// Check if credentials match registered users
const validateCredentials = (username: string, password: string): boolean => {
  const users = getRegisteredUsers();
  const user = users.find((u: any) => u.username === username && u.password === password);
  return !!user;
};

const mockLogin = async (username: string, password: string) => {
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (!username || !password) {
        reject(new Error('Please enter both username and password'));
        return;
      }
      
      // Check against registered users
      if (validateCredentials(username, password)) {
        // Generate a token and store user info
        const token = `token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('currentUser', JSON.stringify({ username, token }));
        resolve({ token });
      } else {
        reject(new Error('Invalid credentials. Please check your username and password.'));
      }
    }, 800);
  });
};

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await mockLogin(username, password);
      dispatch(setToken(res.token));
      login(res.token); // Also update AuthContext
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Student Login - SBRIT Solution | Access Your Training Dashboard"
        description="Login to your SBRIT Solution student account to access course materials, track progress, and manage your IT training journey. Secure student portal for enrolled learners."
        keywords="student login, SBRIT Solution login, course access, student portal, training dashboard, IT course login, student account"
        url="https://sbritsolution.in/login"
      />
      <div style={{ maxWidth: 400, margin: '60px auto', padding: 24 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Student Login</h1>
        <form onSubmit={handleSubmit} style={{ padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
          <h2>Access Your Account</h2>
      <div style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', padding: 8 }}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: 8 }}
        />
      </div>
      {error && (
        <div style={{ 
          color: 'red', 
          marginBottom: 12, 
          padding: '10px', 
          background: '#ffebee', 
          borderRadius: '4px',
          border: '1px solid #f44336'
        }}>
          {error}
        </div>
      )}
          <button type="submit" style={{ width: '100%', padding: 10, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <p>Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register here</Link></p>
          <p><Link to="/" className="text-blue-600 hover:underline">Back to Home</Link></p>
        </div>
      </div>
    </>
  );
};

export default Login; 