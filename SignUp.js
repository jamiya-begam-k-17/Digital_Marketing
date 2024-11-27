import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Navigation

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Log input data for debugging
    console.log("Signing up with: ", { email, password });

    try {
      // Make a POST request to add the new user to db.json
      const response = await axios.post('http://localhost:5000/users', {
        email,
        password,
      });

      // Log response for debugging
      console.log('Response from server:', response);

      // Redirect to login after successful sign up
      navigate('/campaign-form');
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Sign Up error:', error); // Log error for debugging
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSignUp}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
