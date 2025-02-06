"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check active sessions and sets the user
    const initializeAuth = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();


        if (error) throw error;
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error loading auth session:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    const 
     { data:  authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      if (authListener?.subscription) {
        authListener?.subscription?.unsubscribe();
      }
    };
  }, []);

  // Signup function
  const signUp = async ({ email, password, firstName, lastName, phoneNumber, jobPosition, officeLocation }) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            job_position: jobPosition,
            office_location: officeLocation,
          }
        }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error signing up:", error);
      return { error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Signin function
  const signIn = async ({ email, password }) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Signout function
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      router.push('/login');
    } catch (error) {
      throw error;
    }
  };

  // Reset password function
  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
    } catch (error) {
      throw error;
    }
  };

  const value = {
    isAuthenticated: !!user,
    user,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
