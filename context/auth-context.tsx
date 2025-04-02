import React, { createContext, useState, useContext } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  login: () => void;
}

const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  login: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Temporary login function – later replace with real auth logic
  const login = () => setIsAuthenticated(true);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
