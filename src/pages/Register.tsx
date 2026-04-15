import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

// Store registered users in localStorage
const storeUser = (username: string, password: string) => {
  const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  // Check if user already exists
  if (users.find((u: any) => u.username === username)) {
    throw new Error('Username already exists. Please choose a different username.');
  }
  users.push({ username, password });
  localStorage.setItem('registeredUsers', JSON.stringify(users));
};

const mockRegister = async (username: string, password: string) => {
  return new Promise<{ success: boolean }>((resolve, reject) => {
    setTimeout(() => {
      if (!username || !password) {
        reject(new Error('Please fill all fields'));
        return;
      }
      if (username.length < 3) {
        reject(new Error('Username must be at least 3 characters'));
        return;
      }
      if (password.length < 6) {
        reject(new Error('Password must be at least 6 characters'));
        return;
      }
      try {
        storeUser(username, password);
        resolve({ success: true });
      } catch (error: any) {
        reject(error);
      }
    }, 800);
  });
};

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      await mockRegister(username, password);
      setSuccess(true);
      // Clear form after successful registration
      setTimeout(() => {
        setUsername('');
        setPassword('');
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Student Registration - SBRIT Solution | Join Our IT Training Programs"
        description="Register for SBRIT Solution IT training courses. Create your student account to access Angular, React, Java, Python, and other professional development programs with expert instructors."
        keywords="student registration, SBRIT Solution signup, IT course enrollment, training registration, student account, course signup, IT education registration"
        url="https://sbritsolution.in/register"
      />
      <div style={{ maxWidth: 400, margin: '60px auto', padding: 24 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Student Registration</h1>
        <form onSubmit={handleSubmit} style={{ padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
          <h2>Create Your Account</h2>
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
          {success && (
            <div style={{ 
              color: 'green', 
              marginBottom: 12, 
              padding: '10px', 
              background: '#e8f5e9', 
              borderRadius: '4px',
              border: '1px solid #4caf50',
              fontWeight: '500'
            }}>
              ✅ Registration successful! You can now login with your credentials.
            </div>
          )}
          <button type="submit" style={{ width: '100%', padding: 10, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          <p style={{ textAlign: 'center', marginTop: 20 }}>
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
          </p>
        </form>
        
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Register; 