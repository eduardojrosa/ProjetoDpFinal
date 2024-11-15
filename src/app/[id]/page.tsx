'use client';

import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'danilo' || username === 'davi') {
      alert(`Login realizado com sucesso! Bem-vindo, ${username}`);
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="p-10">
      <h1>Login de Usuário</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="username" className="block">Nome de Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-4 rounded w-full">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
