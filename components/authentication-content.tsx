import React from 'react';
import { useAuth } from '../context/auth-context';
import Login from '../app/(auth)/login';

interface AuthContentProps {
  children: React.ReactNode;
}

export default function AuthContent({ children }: AuthContentProps) {
  const { isAuthenticated } = useAuth();

  // If not authenticated, show the login screen.
  if (!isAuthenticated) {
    return <Login />;
  }

  // Otherwise, render the protected content.
  return <>{children}</>;
}
