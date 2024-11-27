// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Login.css';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); // Create navigate function

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       const users = response.data;

//       const user = users.find((user) => user.email === email && user.password === password);

//       if (user) {
//         console.log('Login successful:', user);
//         onLogin(); // Call the login function to update authentication state
//         navigate('/campaign-form'); // Navigate to the Campaign Form
//       } else {
//         setErrorMessage('Invalid email or password.');
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred. Please try again.');
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <form onSubmit={handleLogin}>
//         <div className="input-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="login-button">Login</button>
//       </form>
//       <p className="sign-up-text">
//         Don't have an account? <a href="#sign-up" onClick={() => alert('Sign up functionality not implemented yet.')}>Sign Up</a>
//       </p>
//     </div>
//   );
// }

// export default Login;


























import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Assuming you already have this
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

function Login({ onSignUpClick, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // useNavigate for navigation

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a GET request to get all users and check if the email and password match
      const response = await axios.get('http://localhost:5000/users', {
        params: { email },
      });

      const users = response.data;

      // Check if the user with the entered email and password exists
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setErrorMessage(''); // Clear the error message if login is successful
        onLogin();
        navigate('/campaign-form');
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } catch (error) {
      // Handle error (e.g., network issues)
      setErrorMessage('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error */}
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="sign-up-text">
        Don't have an account?{' '}
        <a href="#sign-up" onClick={() => navigate('/signup')}> {/* Navigate to sign-up page */}
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default Login;
