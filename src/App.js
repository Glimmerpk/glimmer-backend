import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Redirect to the login page when the app starts
    window.location.href = '/html/login.html';
  }, []);

  return (
    <div>
      <h1>Redirecting to Login...</h1>
    </div>
  );
}

export default App;
