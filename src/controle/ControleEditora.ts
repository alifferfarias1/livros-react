// ControleEditora.ts
import Editora from '../modelo/Editora';

class ControleEditora {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' },
    // Adicione mais editoras conforme necessário
  ];

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }
}

export default ControleEditora;