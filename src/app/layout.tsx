import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <head />
      <body className="bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 min-h-screen">
        <div className="max-w-7xl mx-auto">{children}</div>
      </body>
    </html>
  );
};

export default Layout;
