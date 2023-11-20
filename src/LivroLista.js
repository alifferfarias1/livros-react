import React, { useState, useEffect, useMemo  } from 'react';
import ControleLivros from './controle/ControleLivro';
import ControleEditora from './controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
    const nomeEditora = new ControleEditora().getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.titulo}</td>
            <td>{nomeEditora}</td>
            <td>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
    const [bookAdded, setBookAdded] = useState(false); // New state variable
 
    // Usando useMemo para memoizar a instância de ControleLivros
    const controleLivro = useMemo(() => new ControleLivros(), []);
 
    useEffect(() => {
        const obterLivros = async () => {
            setLivros(await controleLivro.obterLivros());
            setCarregado(true);
        };
 
        obterLivros();
    }, [carregado, controleLivro, bookAdded]); // Include bookAdded in the dependency array
 
    const excluir = async (codigo) => {
        await controleLivro.excluir(codigo);
        setCarregado(false);
    };
 
    // Update bookAdded state when a book is added
    useEffect(() => {
        setBookAdded(prev => !prev);
    }, [controleLivro]);

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Editora</th>
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