// LivroLista.js
import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivro';
import ControleEditora from './controle/ControleEditora';



const LinhaLivro = ({ livro, excluir }) => {
    const nomeEditora = new ControleEditora().getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.titulo}
            </td>
            <td>{nomeEditora}</td>
            <td>{livro.resumo}</td>
            <td>{livro.autores.join(", ")}</td>
            <button onClick={() => excluir(livro.codigo)}>Excluir</button>


        </tr>
    );
};


const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    const controleLivro = new ControleLivros();

    useEffect(() => {
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
     }, [carregado, controleLivro]);
     

    const excluir = codigo => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Editora</th>
                        <th>Resumo</th>
                        <th>Autores</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;