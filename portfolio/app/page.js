
export default function Home() {
  return (
    <div>
    <section className="text-center">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Echilin Taina
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Desenvolvedora Front-end | Criando experiências digitais com propósito 🚀
      </p>

      <div className="space-x-4">
        <a
          href="#projetos"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition-all shadow-md hover:shadow-lg"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          className="px-6 py-3 border border-purple-500 hover:bg-purple-500 rounded-xl text-white font-semibold transition-all"
        >
          Contato
        </a>
      </div>
    </section>
    </div>
  );
}
