import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://hxbtzqghmmeyemqqiaau.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4YnR6cWdobW1leWVtcXFpYWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNTQ3MjgsImV4cCI6MjA1NTgzMDcyOH0.1R0bODLIai2gn276DyeIqxNZbrwl2XTWxrTGwG7Oa98");

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignUp} className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
        <button onClick={onClose} className="ml-2 text-gray-600">Cancel</button>
      </div>
    </div>
  );
};

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Hello, World!</h1>
      <button onClick={() => setShowSignUp(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
        Sign Up
      </button>
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </div>
  );
};

export default App;


