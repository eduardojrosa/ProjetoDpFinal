'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 min-h-screen text-white p-10">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Bem-vindo à DP Front-End Design Engineering
        </h1>
        <p className="text-2xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Faculdade Fiap
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-8 animate__animated animate__fadeIn animate__delay-3s">
        <button
          onClick={() => router.push('/cadastro')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Cadastro
        </button>
        <button
          onClick={() => router.push('/login')}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Login
        </button>
        <button
          onClick={() => router.push('/usuarios')}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Usuários
        </button>
      </div>
    </div>
  );
};

export default HomePage;
