import { AlignCenter } from 'lucide-react';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder - replace with real auth
    alert(`Logged in as ${email}`);
    navigate('/');
  };

  return (
    <section>
    <div className="auth-card">
      <h2 style={{textAlign:'center'}}>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Email
          <input type="email" value={email} required onChange={e=>setEmail(e.target.value)} />
        </label>
        <label>Password
          <input type="password" value={password} required onChange={e=>setPassword(e.target.value)} />
        </label>
        <button type="submit" className="btn">Login</button>
      </form>
       
    </div>
    <section>
      <footer className="footer">
        <p>© 2025 Two Elephants. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">LinkedIn</a>
        </div>

        <p className="footer-tag">One Promise: Strength • Care • Honesty</p>
      </footer>
    </section>
    </section>
  );
}
