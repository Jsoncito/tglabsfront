import React, { useMemo, useState } from 'react';
import './App.css';
import Home from './presentation/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext from './presentation/context/AuthContext';
import AuthUser from './domain/entity/Auth/structure/Auth';
import Login from './presentation/pages/Login';

function App() {
  const [auth, setAuth] = useState<AuthUser | undefined>(undefined);

  const login = (user: AuthUser) => {
    setAuth(user);
  };
  const logout = () => {
    if (auth) {
      setAuth(undefined);
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  return (
    <AuthContext.Provider value={authData}>
      <BrowserRouter>
        {auth ? (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
