import { useState, useEffect } from "react";

export default function App() {
  const [tempoRestante, setTempoRestante] = useState(0);

  useEffect(() => {
    const fimCampanha = new Date();
    fimCampanha.setDate(fimCampanha.getDate() + 28);
    const intervalo = setInterval(() => {
      const agora = new Date();
      const diff = fimCampanha - agora;
      setTempoRestante(Math.max(0, Math.floor(diff / 1000)));
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const dias = Math.floor(tempoRestante / 86400);
  const horas = Math.floor((tempoRestante % 86400) / 3600);
  const minutos = Math.floor((tempoRestante % 3600) / 60);
  const segundos = tempoRestante % 60;

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      {/* Aviso de propósito */}
      <div style={{ background: "#FEF3C7", padding: "0.5rem", textAlign: "center", fontWeight: "bold" }}>
        90% dos lucros vão para projetos sociais. Compre e faça parte dessa transformação.
      </div>

      {/* Header */}
      <header style={{ padding: "1rem 0", borderBottom: "1px solid #ddd", marginBottom: "2rem" }}>
        <h1>Brilho no Olho</h1>
        <nav style={{ marginTop: "0.5rem" }}>
          <a href="#sobre" style={{ marginRight: "1rem" }}>Sobre</a>
          <a href="#camisetas" style={{ marginRight: "1rem" }}>Camisas</a>
          <a href="#impacto" style={{ marginRight: "1rem" }}>Impacto</a>
          <a href="#depoimentos" style={{ marginRight: "1rem" }}>Depoimentos</a>
          <a href="#comprar">Compre Agora</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="sobre" style={{ marginBottom: "3rem" }}>
        <h2>Você sobreviveu. Agora vista a sua conquista e ajude outras pessoas a conquistarem também.</h2>
        <p>Cada camiseta vendida ajuda a transformar vidas. 90% dos lucros são doados para projetos sociais.</p>
        <div style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          Faltam {dias}d {horas}h {minutos}m {segundos}s para o fim da campanha
        </div>
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "#10B981", color: "white", border: "none", borderRadius: "4px" }}>
          Quero ajudar e levar minha camiseta
        </button>
      </section>

      {/* Camisetas */}
      <section id="camisetas">
        <h3>Nossas Camisetas</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
              <img src={`/camiseta${i}.jpg`} alt={`Camiseta ${i}`} style={{ maxWidth: "200px", borderRadius: "8px" }} />
              <h4>Camiseta Edição Limitada</h4>
              <p>100% algodão, estampa premium, super confortável.</p>
              <p><strong>De R$119,90 por R$89,90</strong></p>
              <button style={{ marginTop: "0.5rem", padding: "0.5rem 1rem", background: "#2563EB", color: "white", border: "none", borderRadius: "4px" }}>
                Comprar Agora
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Impacto Social */}
      <section id="impacto" style={{ marginTop: "3rem" }}>
        <h3>Por que fazemos isso?</h3>
        <p>Somos uma empresa jovem com uma missão clara: usar a moda como ferramenta de transformação social.</p>
        <p>90% dos nossos lucros vão direto para projetos que apoiam educação, alimentação e inclusão social em comunidades vulneráveis.</p>
        <p>Você não está só comprando uma camiseta — está ajudando a construir um futuro melhor.</p>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" style={{ marginTop: "3rem" }}>
        <h3>Quem já comprou, amou</h3>
        <blockquote>
          <p>“Quando chegou, chorei. Não é só uma camiseta — é minha história estampada.”</p>
          <cite>— Mariana R.</cite>
        </blockquote>
        <blockquote>
          <p>“Super confortável, linda e com um significado incrível. Comprei duas!”</p>
          <cite>— João P.</cite>
        </blockquote>
        <blockquote>
          <p>“Ainda não comprei, mas só de saber que vai para caridade, já tô dentro.”</p>
          <cite>— Camila, futura cliente 💛</cite>
        </blockquote>
      </section>

      {/* Comprar */}
      <section id="comprar" style={{ marginTop: "3rem" }}>
        <h3>Garanta a sua agora</h3>
        <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "300px" }}>
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Endereço de entrega" required />
          <input type="text" placeholder="Forma de pagamento" required />
          <button type="submit" style={{ background: "#10B981", color: "white", padding: "0.5rem", border: "none", borderRadius: "4px" }}>
            Finalizar compra
          </button>
        </form>ss
      </section>

      {/* Rodapé */}
      <footer style={{ marginTop: "3rem", borderTop: "1px solid #ddd", paddingTop: "1rem", textAlign: "center" }}>
        <p>© 2025 Brilho no Olho. Todos os direitos reservados.</p>
        <p>Fale com a gente no WhatsApp • Siga no Instagram @brilhonoolho</p>
      </footer>
    </div>
  );
}
