"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      console.log('[Auth] Initializing authentication...');
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        
        setUser(session?.user ?? null);
      } catch (error) {
        setError(error.message);
      } finally {
        console.log('[Auth] Initialization complete');
        setLoading(false);
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`[Auth] State change detected: ${event}`, {
        event,
        user: session?.user,
        session
      });

      if (session?.user) {
        console.log(`[Auth] User authenticated: ${session.user.email} (${session.user.id})`);
      } else {
        console.log('[Auth] User unauthenticated');
      }

      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      console.log('[Auth] Cleaning up auth subscription');
      subscription?.unsubscribe();
    };
  }, []);

// Sign up function 
  const signUp = async ({ email, password, options }) => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase.auth.signUp({ 
        email, 
        password,
        options
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message);
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

// signin function
  const signIn = async (email, password) => {
    console.log(`[Auth] Login attempt for: ${email}`);
    try {
      setLoading(true);
      setError(null);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) throw error;
      console.log(`[Auth] Login successful for: ${email}`);
      
      return { success: true };
    } catch (error) {
      setError(`${error.message} (${new Date().toISOString()})`);
      return { error };
    } finally {
      setLoading(false);
    }
  };

// signout function
  const signOut = async () => {
    console.log('[Auth] Signout initiated');
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) throw error;
      console.log('[Auth] Signout successful');
      
      setUser(null);
      return { success: true };
    } catch (error) {
      setError(`${error.message} (${new Date().toISOString()})`);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        signUp,
        signIn,
        signOut,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
