"use client"

import Link from 'next/link';
import { useState } from 'react';
import { notFound } from 'next/navigation';

interface SubmitButtonProps {
  username: string;
  password: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ username, password }) => {
  const [isVerified, setIsVerified] = useState(false);

  const checkInput = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/adminLogin", { cache: "no-store" });

      if (!res.ok) {
        console.error("Error fetching data:", res.status, res.statusText);
        return notFound();
      }

      const admin = await res.json();
      console.log("Data received from the server:", admin);

      if (admin && admin.username === username && admin.password === password) {
        console.log("Verification successful");
        setIsVerified(true);
      } else {
        console.log("Verification failed");
      }
    } catch (error) {
      console.error("Error checking input:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => checkInput()}
      >
        Sign in
      </button>

      {isVerified && (
        <Link href="/dashboard">
          <a style={{ display: 'none' }}>Redirect</a>
        </Link>
      )}
    </>
  );
};

export default SubmitButton;
