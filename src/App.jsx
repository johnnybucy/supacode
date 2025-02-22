import React, { useState } from "react";
import SignUp from "./SignUp";

const SignUpButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-600 text-white px-4 py-2 rounded">
      Sign Up
    </button>
  );
};

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Hello, World!</h1>
      <SignUpButton onClick={() => setShowSignUp(true)} />
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </div>
  );
};

export default App;



