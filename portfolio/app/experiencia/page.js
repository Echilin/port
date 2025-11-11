export default function Experiencia() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12 space-y-24">
     

      {/* EXPERIÊNCIA */}
      <div id="experiencia" className="space-y-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Experiência
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/40 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-300">Técnica de Helpdesk – BBG Telecom</h3>
            <p className="text-gray-400 text-sm">2023 - 2025</p>
            <p className="mt-2 text-gray-300">
              Atuei no suporte técnico a usuários, realizando atendimento remoto, resolução de problemas em rede e sistemas,
              além de documentar processos e propor melhorias.
            </p>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-300">Consultora SAP – NTT Data (Academia)</h3>
            <p className="text-gray-400 text-sm">2025 - Atual</p>
            <p className="mt-2 text-gray-300">
              Atualmente em formação na área SAP, com foco em processos de negócios e integração entre sistemas empresariais.
            </p>
          </div>
        </div>
      </div>

      {/* PROJETOS */}
      <div id="projetos" className="space-y-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          Projetos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/40 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-white">Bookly</h3>
            <p className="text-gray-400 text-sm">App de gerenciamento de leitura com integração via API.</p>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-white">Dashboard de Vendas</h3>
            <p className="text-gray-400 text-sm">Painel de controle com dados dinâmicos e gráficos interativos.</p>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-white">Portfólio Pessoal</h3>
            <p className="text-gray-400 text-sm">Este site feito em Next.js + Tailwind para exibir meus trabalhos 💜</p>
          </div>
        </div>
      </div>

      {/* CONTATO */}
      <div id="contato" className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Contato
        </h2>
        <p className="text-gray-300">
          Quer trocar uma ideia ou colaborar em um projeto?  
          Me chame no e-mail ou redes abaixo 👇
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="mailto:echilin.taina@gmail.com"
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition shadow-md hover:shadow-lg"
          >
            E-mail
          </a>
          <a
            href="https://linkedin.com/in/echilin"
            target="_blank"
            className="px-5 py-2 border border-purple-500 hover:bg-purple-500 rounded-lg transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/echilin"
            target="_blank"
            className="px-5 py-2 border border-pink-500 hover:bg-pink-500 rounded-lg transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
