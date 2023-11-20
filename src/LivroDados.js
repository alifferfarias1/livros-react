import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivro';
import ControleEditora from './controle/ControleEditora';

const LivroDados = () => {
    
    // Instanciar controladores
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();

    // Definir vetor de opções para a combo de editoras
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    // Propriedades de estado
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');

    // Hook para navegação
    const navigate = useNavigate();

    // Método para tratar a seleção da combo de editoras
    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    // Método para inclusão de um novo livro
    const incluir = (event) => {
        event.preventDefault();
     
        // Criar um novo livro
        const novoLivro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n')
        };
     
        // Incluir o livro usando o controlador
        controleLivro.incluir(novoLivro);
     
        // Update carregado state in LivroLista component
        
     
        // Navegar de volta para a lista de livros
        navigate('/');
     };

    return (
        <main>
            <h2>Incluir Novo Livro</h2>

            {/* Formulário para inclusão do livro */}
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título:</label>
                    <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="resumo" className="form-label">Resumo:</label>
                    <textarea className="form-control" id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="autores" className="form-label">Autores (um por linha):</label>
                    <textarea className="form-control" id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="editora" className="form-label">Editora:</label>
                    <select className="form-select" id="editora" value={codEditora} onChange={tratarCombo} required>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Incluir Livro</button>
            </form>
        </main>
    );
};

export default LivroDados;