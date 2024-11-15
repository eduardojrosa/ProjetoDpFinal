'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CadastroPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen p-10">
      <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Cadastro</h2>
        <form onSubmit={handleCadastro} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
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
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-purple-700"
          >
            Cadastrar
          </button>
        </form>
        <button
          onClick={() => router.back()}
          className="w-full bg-gray-300 text-black font-semibold py-3 mt-4 rounded-lg"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default CadastroPage;
