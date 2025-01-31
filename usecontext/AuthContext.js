import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../src/lib/supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (userData) => {
    const { email, password, firstName, lastName, phoneNumber, jobPosition, officeLocation } = userData;

    try{
    setLoading(true);
    setError(null);

    // 1. First create the auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      phone: phoneNumber,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName
        }
      }
    });

    if (authError) {
      setError(authError.message);
      return { error: authError };
    }

    // 2. Insert the user data into your User table
    const { error: userError } = await supabase
      .from('User')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          mail_id: email,
          ph_number: phoneNumber,
          job_position: jobPosition,
          office_location: officeLocation,
          auth_user_id: authData.user.id  // Link to auth.users
        }
      ]);

      if (userError) {
        setError(userError.message);
        return { error: userError };
      }

      setLoading(false);
      return { success: true };
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message);
      return { error };
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return { error };
    }
    setLoading(false);
    return { success: true };
  };

  const resetPassword = async (email) => {
    if (!email) {
      setError('Please enter your email address');
      return { error: 'Please enter your email address' };
    }
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setError(error.message);
      return { error };
    }
    setLoading(false);
    return { success: true };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
      return { error };
    }
    return { success: true };
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        loading,
        signUp,
        signIn,
        resetPassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// react hook to use the auth context 
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
