// import React, { useState } from 'react';
// import './App.css'
// import HomePage from './components/HomePage';

// import Group from './img/Group 3.jpg'

// const LoginPage = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform your authentication logic here
//     // For simplicity, always consider it a successful login for this example
//     onLogin();
//   };

//   return (
//     <div className="container">
//     <img className="page-image" src={Group} alt="Page Image" />
//     <br />
//     <input
//       className="email-input"
//       type="email"
//       placeholder="e-mail"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       required
//     />
//     <br />
//     <input
//       className="password-input"
//       type="password"
//       placeholder= "Password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       required
//     />
//     <br />
//     <button className="login-button" onClick={handleSubmit}>Login</button>
//     <br />
//     <a className="forget-password" href="/forgot-password">Forget Password?</a>
//   </div>
  
  

//   );
// };



// const App = () => {
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Perform additional login logic if needed
//     setLoggedIn(true);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <HomePage />
//       ) : (
//         <LoginPage onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default App;



// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform additional login logic if needed
    setLoggedIn(true);
  };

  return (
    <>
      
      <Router>
        <Switch>
          <Route path="/home">
            {isLoggedIn ? <HomePage /> : <LoginPage onLogin={handleLogin} />}
          </Route>
          <Route path="/profile">
            {isLoggedIn ? <Profile /> : <LoginPage onLogin={handleLogin} />}
          </Route>
          <Route path="/">
            <LoginPage onLogin={handleLogin} />
          </Route>
        </Switch>
      </Router>
    </>
    )
};

export default App;

