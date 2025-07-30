"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<{
  user: any;
  loading: boolean;
}>({
  user: null,
  loading: true,
});

export const AuthProvider = ({
  children,
  userServer,
}: {
  children: React.ReactNode;
  userServer: any;
}) => {
  const [user, setUser] = useState(userServer);
  const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
