import AvaliacaoCliente from "./AvaliacaoCliente";
import foto01 from './img/foto01.jpg';
import foto02 from './img/foto02.jpg';
import foto03 from './img/foto03.jpg';
import foto04 from './img/foto04.jpg';
import foto05 from './img/foto05.jpg';

function Depoimentos() {

  const avaliacoes = [
    {
      foto: foto01,
      nome: "Ana Bruck",
      avaliacao01: "\"Eu recomendo a Letícia, pois o atendimento dele fez toda diferença\"",
      avaliacao02: "\"A escolha de imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos\""
    },
    {
      foto: foto02,
      nome: "Dani Shutz",
      avaliacao01: "\"Eu recomendo a Letícia, pois o atendimento dele fez toda diferença\"",
      avaliacao02: "\"A escolha de imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos\""
    },
    {
      foto: foto03,
      nome: "Dina Wolf",
      avaliacao01: "\"Eu recomendo a Letícia, pois o atendimento dele fez toda diferença\"",
      avaliacao02: "\"A escolha de imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos\""

    },
    {
      foto: foto04,
      nome: "Fernanda",
      avaliacao01: "\"Eu recomendo a Letícia, pois o atendimento dele fez toda diferença\"",
      avaliacao02: "\"A escolha de imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos\""

    },
    {
      foto: foto05,
      nome: "Lorena",
      avaliacao01: "\"Eu recomendo a Letícia, pois o atendimento dele fez toda diferença\"",
      avaliacao02: "\"A escolha de imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos\""

    }

  ];
    

    function showAvaliacoesMap() {
        const selectedIndexes = new Set();
        while (selectedIndexes.size < 3) {
          selectedIndexes.add(Math.floor(Math.random() * avaliacoes.length));
        }
      
        return Array.from(selectedIndexes).map((index) => {
          const avaliacao = avaliacoes[index];
          return (
            <AvaliacaoCliente
              key={index}
              foto={avaliacao.foto}
              nome={avaliacao.nome}
              avaliacao01={avaliacao.avaliacao01}
              avaliacao02={avaliacao.avaliacao02}
            />
          );
        });

    } 
    
    return (

        <section>
            {showAvaliacoesMap()}
        </section>
    );
}
export default Depoimentos;