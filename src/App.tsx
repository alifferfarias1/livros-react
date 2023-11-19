// App.tsx
import React from 'react';
import './App.css'; // Importe o arquivo de estilos específicos do aplicativo
import LivroLista from './LivroLista';

const App: React.FC = () => {
  return (
    <div>
      <LivroLista />
    </div>
  );
};

export default App;

