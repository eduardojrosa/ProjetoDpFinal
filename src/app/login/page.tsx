'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const usuarios = [
    { email: 'danilo@dp.com.br', password: 'j12345', name: 'Danilo Jose' },
    { email: 'davizinho@dp.com.br', password: 'd12345', name: 'Davi Fonseca' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const usuario = usuarios.find(
      (user) => user.email === email && user.password === password
    );

    if (usuario) {
      alert(`Login bem-sucedido! Bem-vindo, ${usuario.name}`);
      setError('');
    } else {
      setError('Email ou senha incorretos!');
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 min-h-screen p-10">
      <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-semibold">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-teal-700"
          >
            Entrar
          </button>
        </form>
        <button
          onClick={() => router.push('/cadastro')}
          className="w-full bg-blue-600 text-white font-semibold py-3 mt-4 rounded-lg transition duration-300 hover:bg-blue-700"
        >
          Criar Conta
        </button>
        <button
          onClick={() => router.back()}
          className="w-full bg-gray-300 text-black font-semibold py-3 mt-4 rounded-lg transition duration-300 hover:bg-gray-400"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
