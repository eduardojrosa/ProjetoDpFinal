'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const UsuariosPage = () => {
  const router = useRouter();
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    const usuariosData = [
      { id: '1', name: 'Davi Fonseca', email: 'davizinho@dp.com.br' },
      { id: '2', name: 'Danilo Jose', email: 'danilo@dp.com.br' },
    ];
    setUsuarios(usuariosData);
  }, []);

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen p-10">
      <div className="bg-white rounded-lg p-8 shadow-2xl w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-6">Lista de Usuários</h2>
        <table className="min-w-full table-auto mt-4">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Nome</th>
              <th className="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id} className="hover:bg-gray-100 transition duration-300">
                <td className="px-4 py-2 border">{usuario.id}</td>
                <td className="px-4 py-2 border">{usuario.name}</td>
                <td className="px-4 py-2 border">{usuario.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => router.back()}
          className="w-full bg-gray-300 text-black font-semibold py-3 mt-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default UsuariosPage;
