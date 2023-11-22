interface Sanduiche {
    getDescricao(): string;
    getCusto(): number;
  }
  
  // Implementação básica do Sanduíche
  class SanduicheBasico implements Sanduiche {
    getDescricao(): string {
      return 'Sanduíche';
    }
  
    getCusto(): number {
      return 0;
    }
  }
  
  // Decorator para ingredientes adicionais
  abstract class Decorator implements Sanduiche {
    constructor(protected sanduiche: Sanduiche) {}
  
    abstract getDescricao(): string;
  
    abstract getCusto(): number;
  }
  
  // Ingredientes adicionais
  class FrangoAssado extends Decorator {
    getDescricao(): string {
      return this.sanduiche.getDescricao() + ', Frango Assado';
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto() + 4.5;
    }
  }
  
  class Pepperoni extends Decorator {
    getDescricao(): string {
      return this.sanduiche.getDescricao() + ', Pepperoni';
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto() + 0.99;
    }
  }
  
  class QueijoMussarelaRalado extends Decorator {
    getDescricao(): string {
      return this.sanduiche.getDescricao() + ', Queijo Mussarela Ralado';
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto() + 2.0;
    }
  }
  
  let sanduiche: Sanduiche = new SanduicheBasico();
  sanduiche = new FrangoAssado(sanduiche);
  sanduiche = new Pepperoni(sanduiche);
  sanduiche = new QueijoMussarelaRalado(sanduiche);
  
  // Exibindo descrição e custo final do sanduíche
  console.log(`${sanduiche.getDescricao()} custa $${sanduiche.getCusto().toFixed(2)}`);